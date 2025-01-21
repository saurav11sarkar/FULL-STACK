import { Button, Modal, Table } from "antd";
import {
  useAddFacultyesMutation,
  useGetAllCourseQuery,
} from "../../../redux/features/admin/courseManesment";
import PHform from "../../../components/form/PHform";
import PHselect from "../../../components/form/PHselect";
import { useState } from "react";
import { useGetAllFacultyQuery } from "../../../redux/features/admin/userManesment.api";

const Course = () => {
  const { data: courses, isFetching } = useGetAllCourseQuery(undefined);

  const tableData = courses?.data?.map(({ _id, title, prefix, code }: any) => ({
    key: _id,
    title,
    code: `${prefix}${code}`,
  }));

  const columns = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Action",
      key: "x",
      render: (item: any) => {
        return <AddFacultyModal facultyInfo={item} />;
      },
    },
  ];

  // const onChange: TableProps<TTableData>['onChange'] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra.action === 'filter') {
  //     const queryParams: TQueryParam[] = [];
  //     setParams(queryParams);
  //   }
  // };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
    />
  );
};

const AddFacultyModal = ({ facultyInfo }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultiesData } = useGetAllFacultyQuery(undefined);
  const [addFaculties] = useAddFacultyesMutation();

  const facultiesOption = facultiesData?.data?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));

  const handleSubmit = (data: any) => {
    const facultyData = {
      courseId: facultyInfo.key,
      data
    };
    addFaculties(facultyData);
  };


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Add Faculty</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <PHform onSubmit={handleSubmit}>
          <PHselect
            mode="multiple"
            option={facultiesOption}
            name="faculties"
            label="Faculty"
          />
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Modal>
    </>
  );
};

export default Course;

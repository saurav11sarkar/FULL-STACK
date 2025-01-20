import { Button, Dropdown, Table, Tag } from "antd";
import type { TableColumnsType } from "antd";
import { useGetAllRegisterSemesterQuery } from "../../../redux/features/admin/courseManesment";
import moment from "moment";

type DataType = {
  key: string;
  name: string;
  status: string;
  startDate: string;
  endDate: string;
};

const items = [
  {
    label: "UPCOMING",
    key: "UPCOMING",
  },
  {
    label: "ONGOING",
    key: "ONGOING",
  },
  {
    label: "ENDED",
    key: "ENDED",
  },
];

const RegisterSemester = () => {
  const { data: semesterData, isFetching } =
    useGetAllRegisterSemesterQuery(undefined);

  const tableData: DataType[] =
    semesterData?.data?.map(
      ({ _id, academicSemester, status, startDate, endDate }) => ({
        key: _id,
        name: `${academicSemester.name} ${academicSemester.year}`,
        status,
        startDate: moment(new Date(startDate)).format("MM-DD-YYYY"),
        endDate: moment(new Date(endDate)).format("MM-DD-YYYY"),
      })
    ) || [];

  const handleStattusDropdown = (data: any) => {
    console.log( data);
  };

  const menuProps = {
    items,
    onClick: handleStattusDropdown,
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (item) => {
        let color;
        if (item === "UPCOMING") {
          color = "green";
        } else if (item === "ONGOING") {
          color = "blue";
        } else if (item === "ENDED") {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Dropdown menu={menuProps}>
          <Button>Update</Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <Table<DataType>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
    />
  );
};

export default RegisterSemester;

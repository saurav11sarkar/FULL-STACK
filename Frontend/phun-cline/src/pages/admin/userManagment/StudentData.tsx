import { Button, Pagination, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

import { useState } from "react";
import { TQueryPrams, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManesment.api";
import { Link } from "react-router-dom";

export type DataType = Pick<
  TStudent,
  "_id" | "fullName" | "id" | "email" | "contactNumber"
>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryPrams[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: studentData,
    // isLoading,
    isFetching,
  } = useGetAllStudentsQuery([
    // { name: "limit", value: "10" },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const mataData = studentData?.mata;

  const tableData = studentData?.data?.map(({ _id, fullName, id, email, contactNumber }) => ({
    key: _id,
    _id,
    fullName,
    id,
    email,
    contactNumber,
  }));

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact No.",
      dataIndex: "contactNumber",
    },
    {
      title: "Roll No.",
      dataIndex: "id",
    },
    {
      title: "Action",
      render: (item) => {
        console.log(item);
        return (
          <Space>
            <Link to={`/admin/student-data/${item.key}`}>
            <Button>Details</Button>
            </Link>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryPrams[] = [];
      filters.name?.forEach((value) =>
        queryParams.push({ name: "name", value })
      );
      filters.year?.forEach((value) =>
        queryParams.push({ name: "year", value })
      );
      setParams(queryParams);
      // console.log("Query Params:", queryParams);
    }
  };

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <Table<DataType>
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        current={page}
        pageSize={mataData?.limit}
        total={mataData?.total}
        onChange={(value) => setPage(value)}
      />
    </>
  );
};

export default StudentData;

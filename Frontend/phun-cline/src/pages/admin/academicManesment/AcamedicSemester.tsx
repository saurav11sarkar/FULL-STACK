import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManesment";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../typs/academicMenesment.type";
import { useState } from "react";

type DataType = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "code" | "startMonth" | "endMonth"
>;

const AcamedicSemester = () => {
  const [params, setParams] = useState([]);
  const { data: semesterData } = useGetAllSemesterQuery(params);

  const tableData = semesterData?.data?.map(
    ({ _id, name, year, code, startMonth, endMonth }) => ({
      key: _id, // Use _id as a unique key
      _id,
      name,
      year,
      code,
      startMonth,
      endMonth,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Summar",
          value: "Summar",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Autumn",
          value: "Autumn",
        },
      ],
      onFilter: (value, record) => record.name.includes(value as string),
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
        {
          text: "2027",
          value: "2027",
        },
      ],
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams:any = [];
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

  return (
    <Table<DataType>
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AcamedicSemester;

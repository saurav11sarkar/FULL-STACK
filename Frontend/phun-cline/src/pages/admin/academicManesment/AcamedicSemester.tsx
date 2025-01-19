import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManesment";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../types/academicMenesment.type";
import { useState } from "react";
import { TQueryPrams } from "../../../types";

type DataType = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "code" | "startMonth" | "endMonth"
>;

const AcamedicSemester = () => {
  const [params, setParams] = useState<TQueryPrams[]>([]);
  const {
    data: semesterData,
    // isLoading,
    isFetching,
  } = useGetAllSemesterQuery(params);

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
    {
      title: "Action",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
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
    <Table<DataType>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AcamedicSemester;

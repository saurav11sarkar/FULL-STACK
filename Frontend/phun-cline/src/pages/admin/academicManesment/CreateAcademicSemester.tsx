import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";

import { Button, Col, Flex } from "antd";
import PHselect from "../../../components/form/PHselect";
import { semesterOption } from "../../../constrants/semester";
import { monthOption } from "../../../constrants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schema/academicManesment.shema";

const currentYear = new Date().getFullYear();
const yearOption = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));


const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterOption[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
  };

  

  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <PHform onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
          <PHselect label="Name" name="name" option={semesterOption}></PHselect>
          <PHselect label="Year" name="year" option={yearOption}></PHselect>
          <PHselect
            label="Start Month"
            name="startMonth"
            option={monthOption}
          ></PHselect>
          <PHselect
            label="End Month"
            name="endMonth"
            option={monthOption}
          ></PHselect>

          <Button htmlType="submit">submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;

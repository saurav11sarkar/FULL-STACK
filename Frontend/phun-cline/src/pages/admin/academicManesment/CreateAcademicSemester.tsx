import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";

import { Button, Col, Flex } from "antd";
import PHselect from "../../../components/form/PHselect";
import { semesterOption } from "../../../constrants/semester";
import { monthOption } from "../../../constrants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schema/academicManesment.shema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManesment";
import { toast } from "sonner";
import { TResponse } from "../../../typs/globalType";

const currentYear = new Date().getFullYear();
const yearOption = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const name = semesterOption[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      const res = await addAcademicSemester(semesterData) as TResponse;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      }else{
        toast.success("Academic Semester Created", { id: toastId });
      }
    } catch (error) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <PHform
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
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

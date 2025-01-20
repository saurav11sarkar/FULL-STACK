import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import { Button, Col, Flex } from "antd";
import PHselect from "../../../components/form/PHselect";
import { semesterStatusOption } from "../../../constrants/semester";
import { toast } from "sonner";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManesment";
import PHdatePicker from "../../../components/form/PHdatePicker";
import PHinput from "../../../components/form/PHinput";
import { useAddRegisterSemesterMutation } from "../../../redux/features/admin/courseManesment";
import { TResponse } from "../../../types";

const SemesterRegation = () => {
  const [addSemester] = useAddRegisterSemesterMutation();
  const { data: academicSemester } = useGetAllSemesterQuery([
    { name: "sort", value: "year" },
  ]);

  const academicSemesterOption = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };
    console.log(semesterData);
    try {
      const res = (await addSemester(semesterData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Academic Semester Created", { id: toastId });
      }
    } catch (error) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <PHform onSubmit={onSubmit}>
          <PHselect
            label="Academic Semester"
            name="academicSemester"
            option={academicSemesterOption}
          ></PHselect>

          <PHselect
            label="Status"
            name="status"
            option={semesterStatusOption}
          ></PHselect>

          <PHdatePicker name="startDate" label="Start Date" />
          <PHdatePicker name="endDate" label="End Date" />

          <PHinput type="text" name="minCredit" label="Min Credit" />
          <PHinput type="text" name="maxCredit" label="Max Credit" />

          <Button htmlType="submit">submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default SemesterRegation;

import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import { Button, Col, Flex } from "antd";
import { toast } from "sonner";
import PHinput from "../../../components/form/PHinput";
import {
  useAddCoursesMutation,
  useGetAllCourseQuery,
} from "../../../redux/features/admin/courseManesment";
import { TResponse } from "../../../types";
import PHselect from "../../../components/form/PHselect";



const CreateCourse = () => {
  const [createCourses] = useAddCoursesMutation();
  const { data: courses } = useGetAllCourseQuery(undefined);

  const preRequisiteCourseOption = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const courseData = {
      ...data,
      code:Number(data.code),
      credits:Number(data.credits),
      isDeleted: false,
      preRequisteCourses:data.preRequisteCourses? data?.preRequisteCourses?.map((item) => ({
        courses: item,
        isDeleted: false,
      })):[],
    };
    console.log(courseData);
    try {
      const res = (await createCourses(courseData)) as TResponse<any>;
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
      <Col span={12}>
        <PHform onSubmit={onSubmit}>
          <PHinput type="text" name="title" label="Title" />
          <PHinput type="text" name="prefix" label="Prefix" />
          <PHinput type="text" name="code" label="Code" />
          <PHinput type="text" name="credits" label="Credits" />

          <PHselect
            mode="multiple"
            option={preRequisiteCourseOption}
            name="preRequisteCourses"
            label="Pre Requisite Course"
          />

          <Button htmlType="submit">submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default CreateCourse;

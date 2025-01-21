import { Button, Col, Flex } from "antd";
import PHform from "../../../components/form/PHform";

import { FieldValues, SubmitHandler } from "react-hook-form";
import PHinput from "../../../components/form/PHinput";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManesment";
import PHselectorWithWatch from "../../../components/form/PHselectorWithWatch";
import { useState } from "react";

const OfferCourse = () => {
  const [id, setId] = useState("");
  console.log("insideId",id);
  const { data: academicFaculty } = useGetAllAcademicFacultiesQuery(undefined);
  const academicFacultyOption = academicFaculty?.data?.map((item) => ({
    value: item._id,
    // label: `${item.name} ${item.year}`,
  }));
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <PHform onSubmit={onSubmit}>
          <PHselectorWithWatch
            onValueChange={setId}
            label="Academic Semester"
            name="academicSemester"
            options={academicFacultyOption}
          ></PHselectorWithWatch>

          <PHinput disabled={!id} type="text" label="Course test" name="test" />

          <Button htmlType="submit">submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default OfferCourse;

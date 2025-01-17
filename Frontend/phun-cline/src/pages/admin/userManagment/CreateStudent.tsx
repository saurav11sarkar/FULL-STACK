import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import PHinput from "../../../components/form/PHinput";
import { Button, Col, Divider, Row } from "antd";
import { object } from "zod";

const studentDummyData = {
  password: "securePass890",
  student: {
    name: { firstName: "Mia", middleName: "J", lastName: "Taylor" },
    gender: "female",
    dateOfBirth: "2001-06-25",
    bloodGroup: "B+",

    email: "mia.taylor@example.com",
    contactNumber: "01708099965",
    emergencyContactNo: "01708099966",
    presentAddress: "505 Oak St, Dhaka",
    permamentAddress: "505 Oak St, Dhaka",

    guardian: {
      fatherName: "Alexander Taylor",
      fatherOccupation: "Engineer",
      fatherContactNo: "01708099967",
      motherName: "Charlotte Taylor",
      motherOccupation: "Teacher",
      motherContactNo: "01708099968",
    },

    localGuardian: {
      name: "Emily Brown",
      occupation: "Accountant",
      contactNo: "01708099969",
    },

    admissionSemester: "674dc4d3954d4e9dbae84b17",
    academicDeperment: "674ea22806cb5090a55a9b61",
    profileImg: "https://example.com/profiles/mia_taylor.jpg",
  },
};

const CreateStudent = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    console.log(Object.fromEntries(formData));
  };
  return (
    <Row>
      <Col span={24}>
        <PHform onSubmit={onsubmit}>
          <Divider>Student Information</Divider>
          <Row gutter={8}>
            <Col span={24} md={{span: 12}} lg={{span: 8}}>
              <PHinput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} md={{span: 12}} lg={{span: 8}}>
              <PHinput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} md={{span: 12}} lg={{span: 8}}>
              <PHinput type="text" name="name.lastName" label="Last Name" />
            </Col>

            <Col span={24} md={{span: 12}} lg={{span: 8}}>
              <PHinput type="text" name="gender" label="Gender" />
            </Col>
            <Col span={24} md={{span: 12}} lg={{span: 8}}>
              <PHinput type="text" name="dateOfBirth" label="Date Of Birth" />
            </Col>
            <Col span={24} md={{span: 12}} lg={{span: 8}}>
              <PHinput type="text" name="bloodGroup" label="Blood Group" />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Row>
  );
};

export default CreateStudent;

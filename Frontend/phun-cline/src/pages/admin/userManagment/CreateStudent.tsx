import {  FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import PHinput from "../../../components/form/PHinput";
import { Button, Col, Divider,  Row } from "antd";
import PHselect from "../../../components/form/PHselect";
import { bloodGroupOptions, genderOptions } from "../../../constrants/global";
import PHdatePicker from "../../../components/form/PHdatePicker";
import {
  useGetAllAcademicDepartmentsQuery,
  useGetAllSemesterQuery,
} from "../../../redux/features/admin/academicManesment";
import { useAddStudentMutation } from "../../../redux/features/admin/userManesment.api";

// const studentDummy = {
//   password: "securePass890",
//   student: {
//     name: {
//       firstName: "Mia",
//       middleName: "Js",
//       lastName: "Taylors",
//     },
//     gender: "female",
//     dateOfBirth: "2001-06-25",
//     email: "miass.taylor@example.com",
//     contactNumber: "01708099965",
//     emergencyContactNo: "01708099966",
//     bloodGroup: "B+",
//     presentAddress: "505 Oak St, Dhaka",
//     permamentAddress: "505 Oak St, Dhaka",
//     guardian: {
//       fatherName: "Alexander Taylor",
//       fatherOccupation: "Engineer",
//       fatherContactNo: "01708099967",
//       motherName: "Charlotte Taylor",
//       motherOccupation: "Teacher",
//       motherContactNo: "01708099968",
//     },
//     localGuardian: {
//       name: "Emily Brown",
//       occupation: "Accountant",
//       contactNo: "01708099969",
//     },
//     admissionSemester: "6787c1d1bec074705a9538d3",
//     academicDeperment: "674ea22806cb5090a55a9b61",
//     profileImg: "https://example.com/profiles/mia_taylor.jpg",
//   },
// };

const studentDefaultValues = {
  name: {
    firstName: "Miaa",
    middleName: "Jsa",
    lastName: "Taylorsa",
  },
  gender: "female",
  dateOfBirth: "",
  email: "miass.taylor@exampleaa.com",
  contactNumber: "01708099962",
  emergencyContactNo: "01708099966",
  bloodGroup: "B+",
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
  admissionSemester: "",
  academicDeperment: "",
  profileImg: "",
};

const CreateStudent = () => {
  const [addStudent, { data, error }] = useAddStudentMutation();

  console.log({ data, error });

  const { data: sData, isLoading: sIsLoading } =
    useGetAllSemesterQuery(undefined);

  const { data: dData, isLoading: dIsLoading } =
    useGetAllAcademicDepartmentsQuery(undefined);

  const semesterOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const departmentOptions = dData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData = {
      password: "student123",
      student: data,
    };

    const formData = new FormData();

    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.image);

    addStudent(formData);

    //! This is for development
    //! Just for checking
    console.log(Object.fromEntries(formData));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <PHform onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          <Divider>Personal Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHselect option={genderOptions} name="gender" label="Gender" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHdatePicker name="dateOfBirth" label="Date of birth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHselect
                option={bloodGroupOptions}
                name="bloodGroup"
                label="Blood group"
              />
            </Col>
          </Row>
          
          <Divider>Contact Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="contactNumber" label="Contact" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="permamentAddress"
                label="Permanent Address"
              />
            </Col>
          </Row>

          <Divider>Guardian</Divider>

          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="guardian.fatherContactNo"
                label="Father ContactNo"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="guardian.motherContactNo"
                label="Mother ContactNo"
              />
            </Col>
          </Row>

          <Divider>Local Guardian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput type="text" name="localGuardian.name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="localGuardian.occupation"
                label="Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                type="text"
                name="localGuardian.contactNo"
                label="Contact No."
              />
            </Col>
          </Row>
          <Divider>Academic Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHselect
                option={semesterOptions}
                disabled={sIsLoading}
                name="admissionSemester"
                label="Admission Semester"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHselect
                option={departmentOptions}
                disabled={dIsLoading}
                name="academicDepartment"
                label="Admission Department"
              />
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Row>
  );
};

export default CreateStudent;

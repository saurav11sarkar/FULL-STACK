import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifiToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHform from "../components/form/PHform";
import PHinput from "../components/form/PHinput";

const Login = () => {
  const nagivate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const defaultValues = {
    userId: "A-0001",
    password: "securePass012",
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      nagivate(`/${user.role}/dashboard`);
      toast.success("Login Success", { id: toastId, duration: 2000 });
    } catch (error) {
      toast.error("Login Failed", { id: toastId, duration: 2000 });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHform onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHinput type="text" name="userId" label="ID:" />

        <PHinput type="text" name="password" label="password:" />

        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </PHform>
    </Row>
  );
};

export default Login;

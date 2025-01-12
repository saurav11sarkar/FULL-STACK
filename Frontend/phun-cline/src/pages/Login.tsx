import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifiToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "securePass012",
    },
  });
  const nagivate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onsubmit = async (data: FieldValues) => {
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
      toast.success("Login Success",{id:toastId, duration: 2000});
    } catch (error) {
      toast.error("Login Failed",{id:toastId,duration: 2000});
    }
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </form>
  );
};

export default Login;

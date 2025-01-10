import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifiToken";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "securePass012",
    },
  });
  const dispatch = useAppDispatch();
  const [login, { error }] = useLoginMutation();

  const onsubmit = async (data: any) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
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

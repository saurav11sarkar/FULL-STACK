import { deleteUser } from "@/redux/feature/user/user";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/type";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}
const UserCard = ({ user }: IProps) => {
    const dispatch = useAppDispatch();
  return (
    <div className="border px-4 py-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
      <h2>{user.name}</h2>
      <button onClick={() => dispatch(deleteUser(user.id))}>
        <Trash2 size={20} className="text-red-500" />
      </button>
    </div>
    </div>
  );
};

export default UserCard;

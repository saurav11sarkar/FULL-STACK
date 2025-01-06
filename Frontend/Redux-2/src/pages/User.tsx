import { AddUserModel } from "@/components/module/user/AddUserModel";
import UserCard from "@/components/module/user/UserCard";

import { selectorUser } from "@/redux/feature/user/user";
import { useAppSelector } from "@/redux/hook";

const User = () => {
  const users = useAppSelector(selectorUser);
  console.log(users);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-5">
      <AddUserModel></AddUserModel>
      <div className="my-5 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default User;

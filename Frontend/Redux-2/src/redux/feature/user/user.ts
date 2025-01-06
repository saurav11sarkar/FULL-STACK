import { RootState } from "@/redux/store";
import { IUser } from "@/type";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  users: IUser[];
}

const initialState: IUserState = {
  users: [
    { id: "ssscdfgervb1", name: "John Doe" },
  ],
};

type TNotId = Pick<IUser, "name">;
const createUser = (payload: TNotId): IUser => {
  return { id: nanoid(), ...payload };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TNotId>) => {
      const create = createUser(action.payload);
      state.users.push(create);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
        state.users = state.users.filter((user)=> user.id !== action.payload)
    },
  },
});

export const { addUser,deleteUser } = userSlice.actions;

export const selectorUser = (stare: RootState) => stare.user.users;

export default userSlice.reducer;

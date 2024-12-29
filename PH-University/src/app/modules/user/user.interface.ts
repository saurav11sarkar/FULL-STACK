import { Model } from 'mongoose';
import { USER_ROLE } from './user.constan';

export interface TUser {
  id: string;
  email: string;
  password: string;
  needPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}

// export type TNewUser = {
//     id:string;
//     password:string;
//     role:string;
// }

export interface UserModel extends Model<TUser> {
  //   myStatistics: () => Promise<any>;
  isUserExistsByCostomId(id: string): Promise<TUser>;
  ispasswordMatched(
    plainTextpassword: string,
    hashPassword: string,
  ): Promise<boolean>;

  isJWTIssuedBeforePasswordChanged (
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ) : boolean;
}

export type TUserRole = keyof typeof USER_ROLE;

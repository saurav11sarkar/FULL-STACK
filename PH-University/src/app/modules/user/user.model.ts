import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from "bcrypt";
import { config } from '../../config';

const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true,unique:true },
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['admin', 'student', 'faculty'] },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, Number(config.ROUND));
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

const User = model<TUser>('User', userSchema);
export default User;

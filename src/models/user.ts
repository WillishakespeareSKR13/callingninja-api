import { Schema, model } from "mongoose";
import { z } from "zod";
import Plugins from "../plugins";
import { Company } from "./company";

export const Roles = z.enum(["ADMIN", "USER"]);
export const User = z.object({
  id: z.string(),
  name: z.string(),
  lastname: z.string(),
  birthday: z.coerce.date(),
  email: z.string(),
  phone: z.string(),
  phoneCode: z.string(),
  password: z.string(),
  image: z.string(),
  role: Roles,
  token: z.string(),
  active: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  companies: z.custom<Schema.Types.ObjectId>().array(),
});

export type IUser = z.infer<typeof User>;

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    birthday: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    token: { type: String, default: "" },
    image: {
      type: String,
      default: "https://www.touchtaiwan.com/images/default.jpg",
    },
    phoneCode: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "USER" },
    active: { type: Boolean, default: true },
    companies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Company",
      },
    ],
  },
  Plugins.Mongo.Normalize()
);

UserSchema.plugin(Plugins.Mongo.AutoPopulate);

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;

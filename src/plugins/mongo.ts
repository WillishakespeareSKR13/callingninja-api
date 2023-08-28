import { SchemaOptions } from "mongoose";
import AutoPopulateMongo from "mongoose-autopopulate";

export type NormalizeOptions = SchemaOptions<any> & {
  delete: string[];
};
export type NormalizeReturn = SchemaOptions<any>;

export const Normalize = (otps?: NormalizeOptions): NormalizeReturn => ({
  timestamps: true,
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: function (_, ret) {
      const deleteKeys = otps?.delete ?? [];
      deleteKeys.forEach((key) => {
        delete ret[key];
      });
      delete ret._id;
      return ret;
    },
  },
  ...otps,
});

export const AutoPopulate = AutoPopulateMongo;

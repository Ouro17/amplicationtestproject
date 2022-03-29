import { Rpn } from "../rpn/Rpn";

export type Product = {
  createdAt: Date;
  id: string;
  rpns?: Array<Rpn>;
  updatedAt: Date;
};

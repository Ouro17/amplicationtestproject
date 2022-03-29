import { Rpn } from "../rpn/Rpn";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  rpns?: Array<Rpn>;
  updatedAt: Date;
  username: string;
};

import { Product } from "../product/Product";
import { User } from "../user/User";

export type Rpn = {
  createdAt: Date;
  id: string;
  productId?: Product;
  updatedAt: Date;
  userId?: User | null;
};

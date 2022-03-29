import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RpnCreateInput = {
  productId: ProductWhereUniqueInput;
  userId?: UserWhereUniqueInput | null;
};

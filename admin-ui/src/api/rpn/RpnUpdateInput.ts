import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RpnUpdateInput = {
  productId?: ProductWhereUniqueInput;
  userId?: UserWhereUniqueInput | null;
};

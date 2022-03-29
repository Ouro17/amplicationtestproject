import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RpnWhereInput = {
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
};

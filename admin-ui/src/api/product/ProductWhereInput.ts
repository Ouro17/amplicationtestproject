import { StringFilter } from "../../util/StringFilter";
import { RpnListRelationFilter } from "../rpn/RpnListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  rpns?: RpnListRelationFilter;
};

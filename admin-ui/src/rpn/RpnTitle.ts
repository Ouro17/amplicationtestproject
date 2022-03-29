import { Rpn as TRpn } from "../api/rpn/Rpn";

export const RPN_TITLE_FIELD = "id";

export const RpnTitle = (record: TRpn): string => {
  return record.id || record.id;
};

import { RpnWhereInput } from "./RpnWhereInput";
import { RpnOrderByInput } from "./RpnOrderByInput";

export type RpnFindManyArgs = {
  where?: RpnWhereInput;
  orderBy?: Array<RpnOrderByInput>;
  skip?: number;
  take?: number;
};

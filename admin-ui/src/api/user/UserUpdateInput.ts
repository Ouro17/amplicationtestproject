import { RpnUpdateManyWithoutUsersInput } from "./RpnUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  rpns?: RpnUpdateManyWithoutUsersInput;
  username?: string;
};

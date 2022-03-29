import { RpnCreateNestedManyWithoutUsersInput } from "./RpnCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  rpns?: RpnCreateNestedManyWithoutUsersInput;
  username: string;
};

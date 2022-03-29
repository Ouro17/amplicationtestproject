import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RpnService } from "./rpn.service";
import { RpnControllerBase } from "./base/rpn.controller.base";

@swagger.ApiTags("rpns")
@common.Controller("rpns")
export class RpnController extends RpnControllerBase {
  constructor(
    protected readonly service: RpnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

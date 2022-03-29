import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RpnResolverBase } from "./base/rpn.resolver.base";
import { Rpn } from "./base/Rpn";
import { RpnService } from "./rpn.service";

@graphql.Resolver(() => Rpn)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RpnResolver extends RpnResolverBase {
  constructor(
    protected readonly service: RpnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

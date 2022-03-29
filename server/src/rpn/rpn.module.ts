import { Module } from "@nestjs/common";
import { RpnModuleBase } from "./base/rpn.module.base";
import { RpnService } from "./rpn.service";
import { RpnController } from "./rpn.controller";
import { RpnResolver } from "./rpn.resolver";

@Module({
  imports: [RpnModuleBase],
  controllers: [RpnController],
  providers: [RpnService, RpnResolver],
  exports: [RpnService],
})
export class RpnModule {}

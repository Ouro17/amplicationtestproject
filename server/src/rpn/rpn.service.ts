import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RpnServiceBase } from "./base/rpn.service.base";

@Injectable()
export class RpnService extends RpnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Tenant } from '@prisma/client';

@Controller('tenants')
export class TenantController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<Tenant[]> {
    return this.prisma.tenant.findMany();
  }
}

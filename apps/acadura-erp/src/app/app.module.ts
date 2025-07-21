import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma.service';
import { TenantController } from '../tenant.controller';

@Module({
  imports: [],
  controllers: [AppController, TenantController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}

import { Injectable, OnModuleInit } from '@nestjs/common';
import { NestApplication } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }

  enableShutdownHooks(app: NestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

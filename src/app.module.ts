import { Module } from '@nestjs/common';

import { AppController } from '@src/app.controller';
import { AppService } from '@src/services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { ByeModule } from './bye/bye.module';
import { Bye } from './bye';

@Module({
  imports: [HelloModule, ByeModule],
  providers: [Bye],
})
export class AppModule {}

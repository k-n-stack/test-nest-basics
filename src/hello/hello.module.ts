import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelloRecord } from 'src/database/entities/hello-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HelloRecord])],
  providers: [HelloService],
  controllers: [HelloController],
  exports: [],
})
export class HelloModule {}

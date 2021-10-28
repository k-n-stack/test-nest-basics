import { Module } from '@nestjs/common';
import ormconfig from 'ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelloRecord } from './entities/hello-record.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig, 
      entities: [
        HelloRecord,
      ],
    }),
  ],
})
export class DatabaseModule {}

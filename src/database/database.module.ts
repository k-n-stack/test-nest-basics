import { Module } from '@nestjs/common';
import ormconfig from 'ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig, 
      entities: [],
    }),
  ],
})
export class DatabaseModule {}

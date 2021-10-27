import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USERNAME,
  NODE_ENV,
} from "./config";

import {MysqlConnectionOptions} from 'typeorm/driver/mysql/MysqlConnectionOptions';

const ormconfig: MysqlConnectionOptions = {
  type: 'mysql', 
  username: DATABASE_USERNAME,
  database: DATABASE_NAME,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  password: DATABASE_PASSWORD,
  synchronize: NODE_ENV !== 'production',
}

export = ormconfig;
export const NODE_ENV = process.env.NODE_ENV;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_PORT = process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : undefined;
export const DATABASE_NAME = process.env.MYSQL_DB;
export const DATABASE_PASSWORD = process.env.MYSQL_PASSWORD;
export const DATABASE_USERNAME =  process.env.DATABASE_USERNAME;
export const PORT = process.env.PORT ?? 4000;
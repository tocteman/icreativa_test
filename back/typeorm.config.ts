// got this method from https://wanago.io/2022/07/25/api-nestjs-database-migrations-typeorm/; uncool stuff
//
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { TodoTableMigration } from './src/migrations/1674362437590-migrations'
import { TodoDeletedAtColumnMigration } from './src/migrations/1674368117215-migrations'
 
config();
 
const configService = new ConfigService();
 
export default new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: ['dist/**/*.entity{.ts,.js}' ],
  migrations: [TodoTableMigration, TodoDeletedAtColumnMigration]
//   entities: [],
});

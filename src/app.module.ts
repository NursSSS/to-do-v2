import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config'
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: '127.0.0.1',
    port: 3000,
    username: 'postgres',
    password: 'password',
    database: 'to-do',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    }), 
    TaskModule]
})

export class AppModule {}

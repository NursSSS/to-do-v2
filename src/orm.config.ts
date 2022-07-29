import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 3000,
    username: 'nursSSS',
    password: '123',
    database: 'to_do',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
}
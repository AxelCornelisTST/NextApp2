require('dotenv').config({path: '.env.local'});
import {DataSource, DataSourceOptions} from "typeorm";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";

export const connection: DataSourceOptions = {
    type: "mysql",
    host: process.env.IP,
    port: 3306,
    username: process.env.PRODUCTION_USERNAME,
    password: process.env.PRODUCTION_PASSWORD,
    database: "inventory",
    namingStrategy: new SnakeNamingStrategy(),

    dropSchema: false,
    logging: false,
    synchronize: false,
    extra: {
        trustServerCertificate: true
    },
    entities: ['common/models/*.ts'],
    migrations: ['migrations/*.ts'],
}

export const databaseSource: DataSource = new DataSource(connection);
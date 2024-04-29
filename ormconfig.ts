import {DataSource, DataSourceOptions} from "typeorm";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";

require('dotenv').config({path: '.env.local'});

const ormConnection: DataSourceOptions = {
    type: "mysql",
    host: process.env.IP,
    port: 3306,
    username: process.env.PRODUCTION_USERNAME,
    password: process.env.PRODUCTION_PASSWORD,
    database: "inventory",
    namingStrategy: new SnakeNamingStrategy(),

    dropSchema: false,
    logging: true,
    synchronize: false,
    migrationsRun: false,
    entities: [`${__dirname}/common/models/*.ts`],
    migrations: [`${__dirname}/migrations/*.ts`],
}

export const migrationDataSource: DataSource = new DataSource(ormConnection);
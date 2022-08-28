"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: process.env.POSTGRES_HOST || 'localhost',
                port: Number(process.env.POSTGRES_PORT) || 5432,
                username: process.env.POSTGRES_USERNAME || 'root',
                password: process.env.POSTGRES_PASSWORD || '12345',
                database: process.env.POSTGRES_DB || 'film_db',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map
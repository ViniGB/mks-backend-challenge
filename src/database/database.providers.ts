import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: Number(process.env.POSTGRES_PORT) || 5432,
        username: process.env.POSTGRES_USERNAME || 'root',
        password: process.env.POSTGRES_PASSWORD || '12345',
        database: process.env.POSTGRES_DB || 'film_db',
        entities: [__dirname + '/../**/*.entity{.ts,.js}' ],
        synchronize: true,
      });
     
      return dataSource.initialize();
    },
  },
];

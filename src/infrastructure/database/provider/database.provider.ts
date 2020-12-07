import {createConnection} from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            logging: true,
            host: 'locahost',
            username: 'root',
            password: '1385',
            entities: ['dist/domain/entity/*.js']
        })
    }
]
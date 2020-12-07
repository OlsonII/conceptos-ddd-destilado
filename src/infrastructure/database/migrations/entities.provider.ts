import {Connection} from "typeorm";
import { Driver } from '../../../domain/entity/driver';
import { Licence } from '../../../domain/entity/licence';


export const driverProviders = [
    {
        provide: 'DRIVER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Driver),
        inject: ['DATABASE_CONNECTION'],
    }
];

export const licenceProviders = [
    {
        provide: 'LICENCE_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Licence),
        inject: ['DATABASE_CONNECTION'],
    }
];
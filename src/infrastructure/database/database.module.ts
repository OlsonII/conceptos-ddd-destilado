import {Module} from "@nestjs/common";
import {
    driverProviders,
    licenceProviders
} from './migrations/entities.provider';
import {databaseProviders} from "./provider/database.provider";

@Module(
    {
        providers: [
            ...databaseProviders,
            ...driverProviders,
            ...licenceProviders,
        ],
        exports: [
            ...databaseProviders,
            ...driverProviders,
            ...licenceProviders,
        ]
    }
)
export class DatabaseModule{}
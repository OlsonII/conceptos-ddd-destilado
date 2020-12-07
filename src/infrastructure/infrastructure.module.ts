import {Module} from "@nestjs/common";
import {DatabaseModule} from "./database/database.module";
import {UnitOfWork} from "./unitOfWork/unitOfWork";

@Module(
    {
        imports: [
            DatabaseModule
        ],
        providers: [
            UnitOfWork
        ],
        exports: [
            UnitOfWork
        ]
    }
)
export class InfrastructureModule{}
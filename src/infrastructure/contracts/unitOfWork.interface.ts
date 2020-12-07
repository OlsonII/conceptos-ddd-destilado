import {Connection} from "typeorm";
import { DriverRepository } from '../repositories/driver-repository';
import { LicenceRepository } from '../repositories/licence-repository';


export interface IUnitOfWork{

    //REPOSITORIES
    driverRepository: DriverRepository;
    licenceRepository: LicenceRepository;

    start(): void;
    complete(work: () => any): Promise<any>;
    getConnection(): Connection;
    closeConnection();
}
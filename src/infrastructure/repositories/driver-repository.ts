import {Injectable} from "@nestjs/common";
import {EntityRepository} from "typeorm";
import {GenericRepository} from "../base/generic.repository";
import { Driver } from '../../domain/entity/driver';


@Injectable()
@EntityRepository(Driver)
export class DriverRepository extends GenericRepository<Driver>{}
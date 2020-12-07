import {Injectable} from "@nestjs/common";
import {EntityRepository} from "typeorm";
import {GenericRepository} from "../base/generic.repository";
import { Licence } from '../../domain/entity/licence';

@Injectable()
@EntityRepository(Licence)
export class LicenceRepository extends GenericRepository<Licence>{}
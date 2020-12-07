import {Injectable} from "@nestjs/common";
import { Repository } from 'typeorm';


@Injectable()
export class GenericRepository<T> extends Repository<T>{}

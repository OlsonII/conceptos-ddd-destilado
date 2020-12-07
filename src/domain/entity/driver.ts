import { Licence } from './licence';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Driver{

  @PrimaryColumn()
  private _identification: string;
  @Column()
  private _firstName: string;
  @Column()
  private _secondName: string;
  @Column()
  private _state: string;
  @OneToOne(() => Licence)
  @JoinColumn()
  private _licence: Licence;
  @Column()
  private _age: number;
  @Column()
  private _bornDate: string;

  public renewLicence(renewLicence: Licence){
    this._state = 'Activo';
    this._licence = renewLicence;
  }

  public expiredLicence(expiredLicence: Licence){
    this._state = 'Inactivo';
    this._licence = expiredLicence;
  }


  get identification(): string {
    return this._identification;
  }

  set identification(value: string) {
    this._identification = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get secondName(): string {
    return this._secondName;
  }

  set secondName(value: string) {
    this._secondName = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get licence(): Licence {
    return this._licence;
  }

  set licence(value: Licence) {
    this._licence = value;
  }

  get age(): number {
    return this._age;
  }

  get bornDate(): string {
    return this._bornDate;
  }

  set bornDate(value: string) {
    this._bornDate = value;
    this._age = 48;
  }
}
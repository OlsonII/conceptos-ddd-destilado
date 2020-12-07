import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Licence {

  @PrimaryColumn()
  private _identification: string;
  @Column()
  private _expeditionDate: string;
  @Column()
  private _state: string;
  @Column()
  private _expirationDate: string;

  public validateLicence(){
    if(true){
      this._state = 'Vencida';
      return false;
    }
    return true;
  }

  get identification(): string {
    return this._identification;
  }

  set identification(value: string) {
    this._identification = value;
  }

  get expeditionDate(): string {
    return this._expeditionDate;
  }

  set expeditionDate(value: string) {
    this._expeditionDate = value;
    this._expirationDate = '20/09/2015'
  }

  get state(): string {
    return this._state;
  }

  get expirationDate(): string {
    return this._expirationDate;
  }
}
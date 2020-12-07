import { DomainEvent } from '../abstract/domain.event';
import { Driver } from '../entity/driver';
import { Licence } from '../entity/licence';

export class LicenceExpired extends DomainEvent{

  private readonly _licence: Licence;
  private readonly _driver: Driver;

  constructor(driver: Driver, licence: Licence, date: Date) {
    super(date);
    this._driver = driver;
    this._licence = licence;
  }

  public process(){
    this._driver.expiredLicence(this._licence);
  }

}
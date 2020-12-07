import { DomainEvent } from '../abstract/domain.event';
import { Licence } from '../entity/licence';
import { Driver } from '../entity/driver';

export class LicenceRenewed extends DomainEvent{

  private readonly _licence: Licence;
  private readonly _driver: Driver;

  constructor(driver: Driver, licence: Licence, date: Date) {
    super(date);
    this._driver = driver;
    this._licence = licence;
  }

  public process(): void {
    this._driver.renewLicence(this._licence);
  }
}
import { Driver } from '../src/domain/entity/driver';
import { Licence } from '../src/domain/entity/licence';
import { LicenceExpired } from '../src/domain/events/licence.expired';
import { LicenceRenewed } from '../src/domain/events/licence.renewed';

describe('event domain tests', ()=>{

  const driver: Driver = new Driver();
  driver.identification = '1065';
  driver.firstName = 'Nilson';
  driver.secondName = 'Enrique';
  driver.bornDate = '12/09/1980';
  driver.licence = new Licence();
  driver.licence.identification = driver.identification;
  driver.licence.expeditionDate = '12/09/2008';

  test('Inactivate driver', async () => {

    const firstEvent: LicenceExpired = new LicenceExpired(driver, driver.licence, new Date());
    firstEvent.process();
    console.log(driver.state);
    expect(driver.state).toBe('Inactivo');
  });

  test('Activate driver', async () => {

    const secondEvent: LicenceRenewed = new LicenceRenewed(driver, driver.licence, new Date());
    secondEvent.process();
    console.log(driver.state);
    expect(driver.state).toBe('Activo');
  });

})
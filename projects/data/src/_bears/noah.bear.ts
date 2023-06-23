import { ashford } from '../_locations/ashford.location';
import { broadbridgeHeath } from '../_locations/broadbridgeHeath.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const noah: IBear = {
  Id: 'noah',
  Name: 'Noah',
  UploadedOn: new Date(2019, 8, 9),
  Type: BearType.KeelTeddybear,
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 7, 21),
  },
  Sold: null,
  Rehomed: {
    Location: broadbridgeHeath,
    Date: new Date(2019, 9, 6),
  },
};

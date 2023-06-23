import { farnborough } from '../_locations/farnborough.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const blossom: IBear = {
  Id: 'blossom',
  Name: 'Blossom',
  UploadedOn: new Date(2019, 8, 30),
  Type: BearType.TheWorks,
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 8, 21),
  },
  Sold: null,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2019, 9, 19),
  },
};

import { dorchester } from '../_locations/dorchester.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const polly: IBear = {
  Id: 'polly',
  Name: 'Polly',
  UploadedOn: new Date(2018, 11, 3),
  Type: BearType.BuildABear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 9, 13),
  },
  Sold: null,
  Rehomed: {
    Location: dorchester,
    Date: new Date(2019, 5, 2),
  },
};

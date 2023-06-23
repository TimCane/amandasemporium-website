import { bridgewater } from '../_locations/bridgewater.location';
import { chicester } from '../_locations/chicester.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const joe: IBear = {
  Id: 'joe',
  Name: 'Joe',
  UploadedOn: new Date(2019, 8, 9),
  Type: BearType.BuildABear,
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 7, 3),
  },
  Sold: null,
  Rehomed: {
    Location: bridgewater,
    Date: new Date(2019, 7, 17),
  },
};

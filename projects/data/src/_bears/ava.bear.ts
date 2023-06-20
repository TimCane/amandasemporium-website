import { addlestone } from '../_locations/addlestone.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ava: IBear = {
  Id: 'ava',
  Name: 'Ava',
  Type: BearType.BuildABear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 4, 18),
  },
  Sold: null,
  Rehomed: null,
};

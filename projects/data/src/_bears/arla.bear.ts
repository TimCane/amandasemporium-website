import { bosham } from '../_locations/bosham.location';
import { horley } from '../_locations/horley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const arla: IBear = {
  Id: 'arla',
  Name: 'Arla',
  Type: BearType.BuildABear,
  Rescued: {
    Location: bosham,
    Date: new Date(2022, 7, 10),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2023, 3, 22),
  },
};

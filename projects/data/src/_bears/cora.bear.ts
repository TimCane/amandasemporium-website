import { shepperton } from '../_locations/shepperton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cora: IBear = {
  Id: 'cora',
  Name: 'Cora',
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 5, 3),
  },
  Sold: null,
  Rehomed: null,
};

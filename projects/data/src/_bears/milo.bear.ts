import { durham } from '../_locations/durham.location';
import { shepperton } from '../_locations/shepperton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const milo: IBear = {
  Id: 'milo',
  Name: 'Milo',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 9, 8),
  },
  Sold: null,
  Rehomed: {
    Location: durham,
    Date: new Date(2018, 9, 29),
  },
};

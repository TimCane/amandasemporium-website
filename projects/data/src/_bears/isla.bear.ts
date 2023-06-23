import { shepperton } from '../_locations/shepperton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const isla: IBear = {
  Id: 'isla',
  Name: 'Isla',
  UploadedOn: new Date(2022, 11, 2),
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2022, 9, 29),
  },
  Event: null,
  Rehomed: null,
};

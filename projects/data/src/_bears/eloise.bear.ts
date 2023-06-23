import { surbiton } from '../_locations/surbiton.location';
import { westWittering } from '../_locations/westWittering.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const eloise: IBear = {
  Id: 'eloise',
  Name: 'Eloise',
  UploadedOn: new Date(2022, 8, 26),
  Type: BearType.BuildABear,
  Rescued: {
    Location: westWittering,
    Date: new Date(2022, 7, 27),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 8, 24),
  },
};

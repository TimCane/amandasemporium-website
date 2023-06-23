import { ripley } from '../_locations/ripley.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const elsie: IBear = {
  Id: 'elsie',
  Name: 'Elsie',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ripley,
    Date: new Date(2018, 5, 10),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2018, 8, 29),
  },
};

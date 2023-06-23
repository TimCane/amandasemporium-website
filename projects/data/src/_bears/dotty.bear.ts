import { birdham } from '../_locations/birdham.location';
import { bordon } from '../_locations/bordon.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const dotty: IBear = {
  Id: 'dotty',
  Name: 'Dotty',
  UploadedOn: new Date(2019, 8, 9),
  Type: BearType.BuildABear,
  Rescued: {
    Location: birdham,
    Date: new Date(2019, 7, 24),
  },
  Sold: null,
  Rehomed: {
    Location: bordon,
    Date: new Date(2019, 8, 21),
  },
};

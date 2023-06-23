import { bexhillOnSea } from '../_locations/bexhillOnSea.location';
import { stilton } from '../_locations/stilton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const karen: IBear = {
  Id: 'karen',
  Name: 'Karen',
  UploadedOn: new Date(2019, 1, 25),
  Type: BearType.Unknown,
  Rescued: {
    Location: bexhillOnSea,
    Date: new Date(2019, 8, 14),
  },
  Sold: null,
  Rehomed: {
    Location: stilton,
    Date: new Date(2020, 1, 16),
  },
};

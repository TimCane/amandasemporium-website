import { godalming } from '../_locations/godalming.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const frank: IBear = {
  Id: 'frank',
  Name: 'Frank',
  UploadedOn: new Date(2019, 8, 9),
  Type: BearType.BuildABear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2019, 7, 26),
  },
  Sold: null,
  Rehomed: {
    Location: godalming,
    Date: new Date(2019, 8, 21),
  },
};

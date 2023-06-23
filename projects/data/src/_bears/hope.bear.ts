import { camberley } from '../_locations/camberley.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const hope: IBear = {
  Id: 'hope',
  Name: 'Hope',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 6, 7),
  },
  Sold: null,
  Rehomed: {
    Location: camberley,
    Date: new Date(2018, 10, 17),
  },
};

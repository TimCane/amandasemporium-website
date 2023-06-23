import { ripley } from '../_locations/ripley.location';
import { southampton } from '../_locations/southampton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const susie: IBear = {
  Id: 'susie',
  Name: 'Susie',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ripley,
    Date: new Date(2018, 5, 17),
  },
  Sold: null,
  Rehomed: {
    Location: southampton,
    Date: new Date(2018, 7, 18),
  },
};

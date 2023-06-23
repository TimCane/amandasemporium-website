import { addlestone } from '../_locations/addlestone.location';
import { odiham } from '../_locations/odiham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const elsa: IBear = {
  Id: 'elsa',
  Name: 'Elsa',
  UploadedOn: new Date(2022, 10, 18),
  Type: BearType.BuildABear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 11, 14),
  },
  Sold: null,
  Rehomed: {
    Location: odiham,
    Date: new Date(2022, 11, 27),
  },
};

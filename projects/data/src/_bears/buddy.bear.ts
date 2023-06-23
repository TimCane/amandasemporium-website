import { chicester } from '../_locations/chicester.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const buddy: IBear = {
  Id: 'buddy',
  Name: 'Buddy',
  UploadedOn: new Date(2019, 11, 12),
  Type: BearType.BearFactory,
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 9, 21),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 10, 27),
  },
};

import { peterborough } from '../_locations/peterborough.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const greta: IBear = {
  Id: 'greta',
  Name: 'Greta',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Rabbit,
  },
  Rescued: {
    Location: peterborough,
    Date: new Date(2023, 4, 1),
  },
  Event: null,
  Rehomed: null,
};

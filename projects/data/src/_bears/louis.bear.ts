import { E20190928 } from '../_events/E2019-09-28.event';
import { reading } from '../_locations/reading.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const louis: IBear = {
  Id: 'louis',
  Name: 'Louis',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: reading,
    Date: new Date(2019, 6, 28),
  },
  Event: E20190928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};

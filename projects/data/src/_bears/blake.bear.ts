import { E20210925 } from '../_events/E2021-09-25.event';
import { addlestone } from '../_locations/addlestone.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const blake: IBear = {
  Id: 'blake',
  Name: 'Blake',
  Description: ``,
  UploadedOn: new Date(2021, 7, 11),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2021, 6, 16),
  },
  Event: E20210925,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2021, 8, 25),
  },
};

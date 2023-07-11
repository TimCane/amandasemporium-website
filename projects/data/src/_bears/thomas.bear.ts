import { E20220717 } from '../_events/E2022-07-17.event';
import { addlestone } from '../_locations/addlestone.location';
import { guildford } from '../_locations/guildford.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const thomas: IBear = {
  Id: 'thomas',
  Name: 'Thomas',
  Description: ``,
  UploadedOn: new Date(2019, 11, 12),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2019, 10, 7),
  },
  Event: E20220717,
  Rehomed: {
    Location: guildford,
    Date: new Date(2022, 6, 17),
  },
};

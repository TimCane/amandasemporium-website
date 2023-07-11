import { E20191130 } from '../_events/E2019-11-30.event';
import { guildford } from '../_locations/guildford.location';
import { titchfield } from '../_locations/titchfield.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const izzy: IBear = {
  Id: 'izzy',
  Name: 'Izzy',
  Description: ``,
  UploadedOn: new Date(2019, 9, 7),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: titchfield,
    Date: new Date(2019, 7, 25),
  },
  Event: E20191130,
  Rehomed: {
    Location: guildford,
    Date: new Date(2019, 10, 30),
  },
};

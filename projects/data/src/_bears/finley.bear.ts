import { E20230610 } from '../_events/E2023-06-10.event';
import { basingstoke } from '../_locations/basingstoke.location';
import { guildford } from '../_locations/guildford.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const finley: IBear = {
  Id: 'finley',
  Name: 'Finley',
  UploadedOn: new Date(2022, 11, 9),
  Type: BearType.BuildABear,
  Rescued: {
    Location: guildford,
    Date: new Date(2022, 7, 7),
  },
  Event: E20230610,
  Rehomed: {
    Location: basingstoke,
    Date: new Date(2023, 5, 10),
  },
};

import { E20191201 } from '../_events/E2019-12-01.event';
import { send } from '../_locations/send.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const maisie: IBear = {
  Id: 'maisie',
  Name: 'Maisie',
  UploadedOn: new Date(2019, 8, 9),
  Type: BearType.BuildABear,
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 7, 4),
  },
  Event: E20191201,
  Rehomed: {
    Location: send,
    Date: new Date(2019, 11, 1),
  },
};

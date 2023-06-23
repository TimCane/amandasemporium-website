import { E20181111 } from '../_events/E2018-11-11.event';
import { shepperton } from '../_locations/shepperton.location';
import { steventon } from '../_locations/steventon.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const aiden: IBear = {
  Id: 'aiden',
  Name: 'Aiden',
  UploadedOn: new Date(2018, 10, 12),
  Type: BearType.BearFactory,
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 9, 13),
  },
  Event: E20181111,
  Rehomed: {
    Location: steventon,
    Date: new Date(2018, 10, 11),
  },
};

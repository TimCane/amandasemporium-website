import { E20180526 } from '../_events/E2018-05-26.event';
import { burnham } from '../_locations/burnham.location';
import { southsea } from '../_locations/southsea.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const sam: IBear = {
  Id: 'sam',
  Name: 'Sam',
  Description: ``,
  UploadedOn: new Date(2018, 4, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 3, 28),
  },
  Event: E20180526,
  Rehomed: {
    Location: burnham,
    Date: new Date(2018, 4, 26),
  },
};

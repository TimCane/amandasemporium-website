import { maidenhead } from '../_locations/maidenhead.location';
import { southsea } from '../_locations/southsea.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const archie: IBear = {
  Id: 'archie',
  Name: 'Archie',
  Description: ``,
  UploadedOn: new Date(2019, 4, 27),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 4, 5),
  },
  Event: null,
  Rehomed: {
    Location: maidenhead,
    Date: new Date(2020, 3, 23),
  },
};

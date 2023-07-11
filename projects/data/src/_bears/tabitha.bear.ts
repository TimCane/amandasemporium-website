import { E20220924 } from '../_events/E2022-09-24.event';
import { berrylands } from '../_locations/berrylands.location';
import { westWittering } from '../_locations/westWittering.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { cat } from './_species/cat.bear-species';

export const tabitha: IBear = {
  Id: 'tabitha',
  Name: 'Tabitha',
  Description: ``,
  UploadedOn: new Date(2022, 8, 26),
  Info: {
    Brand: buildABear,
    Species: cat,
  },
  Rescued: {
    Location: westWittering,
    Date: new Date(2022, 7, 27),
  },
  Event: E20220924,
  Rehomed: {
    Location: berrylands,
    Date: new Date(2022, 8, 24),
  },
};

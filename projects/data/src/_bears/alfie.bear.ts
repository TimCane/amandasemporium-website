import { E20180421 } from '../_events/E2018-04-21.event';
import { horley } from '../_locations/horley.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const alfie: IBear = {
  Id: 'alfie',
  Name: 'Alfie',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 3, 4),
  },
  Event: E20180421,
  Rehomed: {
    Location: horley,
    Date: new Date(2018, 3, 21),
  },
};

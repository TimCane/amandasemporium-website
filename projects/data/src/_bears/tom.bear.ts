import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20190928 } from '../_events/E2019-09-28.event';
import { leeds } from '../_locations/leeds.location';
import { titchfield } from '../_locations/titchfield.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const tom: IBear = {
  Id: 'tom',
  Name: 'Tom',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: titchfield,
    Date: new Date(2019, 7, 25),
  },
  Event: E20190928,
  Rehomed: {
    Location: leeds,
    Date: new Date(2019, 8, 28),
  },
};

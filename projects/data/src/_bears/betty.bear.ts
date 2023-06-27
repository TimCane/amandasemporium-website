import { E20230625 } from '../_events/E2023-06-25.event';
import { shepperton } from '../_locations/shepperton.location';
import { thatcham } from '../_locations/thatcham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const betty: IBear = {
  Id: 'betty',
  Name: 'Betty',
  UploadedOn: new Date(2023, 5, 20),
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 5, 3),
  },
  Event: E20230625,
  Rehomed: {
    Date: new Date(2023, 5, 25),
    Location: thatcham,
  },
};

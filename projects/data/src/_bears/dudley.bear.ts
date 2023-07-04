import { E20190928 } from '../_events/E2019-09-28.event';
import { bexhillOnSea } from '../_locations/bexhillOnSea.location';
import { ewell } from '../_locations/ewell.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const dudley: IBear = {
  Id: 'dudley',
  Name: 'Dudley',
  UploadedOn: new Date(2019, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: bexhillOnSea,
    Date: new Date(2019, 8, 14),
  },
  Event: E20190928,
  Rehomed: {
    Location: ewell,
    Date: new Date(2019, 8, 28),
  },
};

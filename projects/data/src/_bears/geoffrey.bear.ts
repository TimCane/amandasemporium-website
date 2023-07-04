import { E20220924 } from '../_events/E2022-09-24.event';
import { longDitton } from '../_locations/longDitton.location';
import { sidlesham } from '../_locations/sidlesham.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const geoffrey: IBear = {
  Id: 'geoffrey',
  Name: 'Geoffrey',
  UploadedOn: new Date(2022, 7, 17),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: sidlesham,
    Date: new Date(2022, 4, 7),
  },
  Event: E20220924,
  Rehomed: {
    Location: longDitton,
    Date: new Date(2022, 8, 24),
  },
};

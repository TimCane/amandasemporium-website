import { cobham } from '../_locations/cobham.location';
import { southShields } from '../_locations/southShields.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mo: IBear = {
  Id: 'mo',
  Name: 'Mo',
  UploadedOn: new Date(2021, 6, 16),
  Type: {
    Type: BearTypeEnum.BearFactory,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2020, 11, 5),
  },
  Event: null,
  Rehomed: {
    Location: southShields,
    Date: new Date(2021, 11, 5),
  },
};

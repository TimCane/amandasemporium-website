import { shepperton } from '../_locations/shepperton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ella: IBear = {
  Id: 'ella',
  Name: 'Ella',
  UploadedOn: new Date(2022, 11, 2),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2022, 9, 29),
  },
  Event: null,
  Rehomed: null,
};

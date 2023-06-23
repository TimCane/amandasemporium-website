import { E20180929 } from '../_events/E2018-09-29.event';
import { shepperton } from '../_locations/shepperton.location';
import { surbitonNurseySchool } from '../_locations/surbitonNurseySchool.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const leo: IBear = {
  Id: 'leo',
  Name: 'Leo',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 8, 8),
  },
  Event: E20180929,
  Rehomed: {
    Location: surbitonNurseySchool,
    Date: new Date(2018, 8, 29),
  },
};

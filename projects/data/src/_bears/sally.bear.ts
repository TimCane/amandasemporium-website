import { E20221210 } from '../_events/E2022-12-10.event';
import { london } from '../_locations/london.location';
import { shepperton } from '../_locations/shepperton.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const sally: IBear = {
  Id: 'sally',
  Name: 'Sally',
  Description: ``,
  UploadedOn: new Date(2022, 10, 21),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2022, 9, 29),
  },
  Event: E20221210,
  Rehomed: {
    Location: london,
    Date: new Date(2022, 11, 10),
  },
};

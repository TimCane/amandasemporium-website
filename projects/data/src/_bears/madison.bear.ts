import { E20191201 } from '../_events/E2019-12-01.event';
import { emsworth } from '../_locations/emsworth.location';
import { send } from '../_locations/send.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const madison: IBear = {
  Id: 'madison',
  Name: 'Madison',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: emsworth,
    Date: new Date(2018, 6, 7),
  },
  Event: E20191201,
  Rehomed: {
    Location: send,
    Date: new Date(2019, 11, 1),
  },
};

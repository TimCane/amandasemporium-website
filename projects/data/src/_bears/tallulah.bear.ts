import { addlestone } from '../_locations/addlestone.location';
import { horley } from '../_locations/horley.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tallulah: IBear = {
  Id: 'tallulah',
  Name: 'Tallulah',
  Description: ``,
  UploadedOn: new Date(2022, 10, 18),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Cat,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 10, 14),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2023, 3, 22),
  },
};

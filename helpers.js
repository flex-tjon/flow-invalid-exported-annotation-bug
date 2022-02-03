// @flow

import Enum, { type EnumType } from "./enum";

const AnEnumDefinition = {
  one: null,
  two: null,
  three: null,
};

const ENUM_DEFINITION: EnumType<typeof AnEnumDefinition> = Enum(AnEnumDefinition);

const b = 30;
b.concat(30);

export const data = {
  all: [
    ENUM_DEFINITION.one,
    ENUM_DEFINITION.two,
    ENUM_DEFINITION.three,
  ],
  some: [
    ENUM_DEFINITION.two,
    ENUM_DEFINITION.three,
  ],
};

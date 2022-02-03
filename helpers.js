// @flow

import Enum, { type EnumType } from "./enum";

const AnEnumDefinition = {
  one: null,
  two: null,
  three: null,
};

export const ENUM_DEFINITION: EnumType<typeof AnEnumDefinition> = Enum(AnEnumDefinition);

// @flow

import { ENUM_DEFINITION } from "./helpers";

export type SpecificOptions = typeof ENUM_DEFINITION.one | typeof ENUM_DEFINITION.two;

const enumToAttribute = (option: SpecificOptions) => {
  if (option !== ENUM_DEFINITION.one) {
    return "many";
  }

  return "one";
}

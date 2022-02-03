// @flow

import invariant from "invariant";
import keyMirror from "keymirror";

export type EnumType<T> = $ObjMap<T, <V>(V) => $Keys<T>>;

export default function Enum<T: {...}>(definition: T): EnumType<T> {
  return Object.freeze(keyMirror(definition));
}

export function checkEnum<T: {...}>(enumType: T, value: string): ?$Keys<T> {
  invariant(Object.isFrozen(enumType), "Using a non-frozen object as an enum");

  // $FlowFixMe[method-unbinding]
  if (Object.prototype.hasOwnProperty.call(enumType, value)) {
    // $FlowFixMe[prop-missing]
    return value;
  }

  return null;
}

export function assertEnum<T: {...}>(enumType: T, value: string): $Keys<T> {
  const enumValue = checkEnum(enumType, value);
  invariant(enumValue != null, `Value ${value} is not a member of enum.`);

  return enumValue;
}

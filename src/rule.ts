import {
  BaseMapManipulatorProps,
  Manipulator,
  Rule,
  TapAndHoldManipulatorProps,
} from "./model";

export function createRule(
  description: string,
  manipulators: Manipulator[],
): Rule {
  return { description, manipulators };
}

export function createBasicMapManipulator(
  props: BaseMapManipulatorProps,
): Manipulator {
  return {
    description: `${props.fromKey} -> ${props.toKey}`,
    from: {
      key_code: props.fromKey,
    },
    to: {
      key_code: props.toKey,
    },
    type: "basic",
  };
}

export function createTapAndHoldManipulator(
  props: TapAndHoldManipulatorProps,
): Manipulator {
  return {
    description: `${props.fromKey} -> onTap: ${props.toIfTapKey}, onHold: ${props.toIfHoldKey}`,
    from: {
      key_code: props.fromKey,
    },
    to_if_held_down: {
      key_code: props.toIfHoldKey,
    },
    parameters: {
      "basic.to_if_alone_timeout_milliseconds": 250,
      "basic.to_if_held_down_threshold_milliseconds": 250,
    },
    to_if_alone: {
      key_code: props.toIfTapKey,
    },
    type: "basic",
  };
}

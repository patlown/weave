type KeyCode = string; // Simplified for example; ideally, list all possible key codes as string union types

type ModifierKey =
  | "left_command"
  | "left_control"
  | "left_option"
  | "left_shift"
  | "right_command"
  | "right_control"
  | "right_option"
  | "right_shift";

interface Action {
  key_code: KeyCode;
  modifiers?: ModifierKey[];
}

interface Manipulator {
  description: string;
  from?: Action;
  to?: Action;
  type: "basic";
}

interface Rule {
  description: string;
  manipulators: Manipulator[];
}

export interface BaseMapManipulatorProps {
  fromKey: KeyCode;
  toKey: KeyCode;
}

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

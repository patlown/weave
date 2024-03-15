export interface Parameters {
  "basic.to_if_alone_timeout_milliseconds": number;
  "basic.to_if_held_down_threshold_milliseconds": number;
}

export type KeyCode = string; // Simplified for example; ideally, list all possible key codes as string union types

export type ModifierKey =
  | "left_command"
  | "left_control"
  | "left_option"
  | "left_shift"
  | "right_command"
  | "right_control"
  | "right_option"
  | "right_shift";

export interface Action {
  key_code: KeyCode;
  modifiers?: ModifierKey[];
}

export interface Manipulator {
  description: string;
  from?: Action;
  to?: Action;
  to_if_held_down?: Action;
  to_if_alone?: Action;
  type: "basic";
  parameters?: Parameters;
}

export interface Rule {
  description: string;
  manipulators: Manipulator[];
}

export interface BaseMapManipulatorProps {
  fromKey: KeyCode;
  toKey: KeyCode;
}

export interface TapAndHoldManipulatorProps {
  fromKey: KeyCode;
  toIfHoldKey: KeyCode;
  toIfTapKey: KeyCode;
}

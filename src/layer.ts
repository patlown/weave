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
  from: {
    key_code: KeyCode;
  };
  to: Action[];
  to_if_alone?: Action[];
  type: "basic";
}

interface Rule {
  description: string;
  manipulators: Manipulator[];
}

// Helper to create a manipulator for mapping one key to another with modifiers
export function createHyperKeyManipulator(
  fromKey: KeyCode,
  modifiers: ModifierKey[],
  toKey: KeyCode,
  aloneKey?: KeyCode,
): Manipulator {
  return {
    description: `${fromKey} -> Hyper Key with [${modifiers.join(", ")}]`,
    from: {
      key_code: fromKey,
    },
    to: [
      {
        key_code: toKey,
        modifiers: modifiers,
      },
    ],
    ...(aloneKey ? { to_if_alone: [{ key_code: aloneKey }] } : {}),
    type: "basic",
  };
}

// Helper to create a complete Karabiner rule
export function createKarabinerRule(
  description: string,
  manipulators: Manipulator[],
): Rule {
  return { description, manipulators };
}

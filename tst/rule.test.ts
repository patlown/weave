import {
  createBasicMapManipulator,
  createTapAndHoldManipulator,
} from "../src/rule";

test("creates basic key switch", () => {
  expect(
    createBasicMapManipulator({
      fromKey: "caps_lock",
      toKey: "escape",
    }),
  ).toStrictEqual({
    description: "caps_lock -> escape",
    from: { key_code: "caps_lock" },
    to: { key_code: "escape" },
    type: "basic",
  });
});

test("creates tap and hold", () => {
  expect(
    createTapAndHoldManipulator({
      fromKey: "z",
      toIfTapKey: "z",
      toIfHoldKey: "left_control",
    }),
  ).toMatchObject({
    description: "z -> onTap: z, onHold: left_control",
    // omit parameters for now, unsure on how these should be handled
    from: { key_code: "z" },
    to_if_alone: { key_code: "z" },
    to_if_held_down: { key_code: "left_control" },
    type: "basic",
  });
});

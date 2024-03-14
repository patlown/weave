import { createBasicMapManipulator } from "../src/rule";

test("creates simple manipulator", () => {
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

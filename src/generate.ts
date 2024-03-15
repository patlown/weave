import {
  createBasicMapManipulator,
  createRule,
  createTapAndHoldManipulator,
} from "./rule";

const rulesConfig = createRule("config", [
  createBasicMapManipulator({
    fromKey: "caps_lock",
    toKey: "escape",
  }),
  createTapAndHoldManipulator({
    fromKey: "z",
    toIfHoldKey: "left_control",
    toIfTapKey: "z",
  }),
  createTapAndHoldManipulator({
    fromKey: "slash",
    toIfHoldKey: "right_control",
    toIfTapKey: "slash",
  }),
]);

console.log(JSON.stringify(rulesConfig, null, 2));

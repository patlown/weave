import { createBasicMapManipulator, createRule } from "./rule";

const rulesConfig = createRule("config", [
  createBasicMapManipulator({
    fromKey: "caps_lock",
    toKey: "escape",
  }),
]);

console.log(JSON.stringify(rulesConfig, null, 2));

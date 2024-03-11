import { createHyperKeyManipulator, createKarabinerRule } from "./layer";

const hyperKeyRule = createKarabinerRule("Hyper Key (⌃⌥⇧⌘)", [
  createHyperKeyManipulator(
    "caps_lock",
    ["left_command", "left_control", "left_option", "left_shift"],
    "left_shift",
    "escape",
  ),
]);

console.log(JSON.stringify(hyperKeyRule, null, 2));

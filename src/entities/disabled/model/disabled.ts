import { createStore } from "effector";
import { disabledEvent } from "../lib/disabled-event";

export const $disabled = createStore<boolean>(false).on(
  disabledEvent,
  (_, disabled) => disabled
);

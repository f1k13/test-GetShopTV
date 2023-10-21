import { createStore } from "effector";
import { errorNumberEvent } from "../lib/error-number-event";

export const $errorNumber = createStore<boolean>(false).on(
  errorNumberEvent,
  (_, errorNumber) => errorNumber
);

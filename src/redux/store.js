import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import agentSlice from "./agentSlice";
import confirmSlice from "./confirmSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    agent: agentSlice,
    confirm: confirmSlice,
  },
});

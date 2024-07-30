import { createSlice } from "@reduxjs/toolkit";

export const agentSlice = createSlice({
  name: "agent",
  initialState: {
    data: null,
  },
  reducers: {
    setAgentData: (state, action) => {
      state.data = action.payload;
    },
    resetAgentdata: (state) => {
      state.data = null;
    },
  },
});

export const { setAgentData, resetAgentdata } = agentSlice.actions;

export const selectAgentDetails = (state) => state.agent.data;

export default agentSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VoiceState {
  voiceEnabled: boolean;
  selectedVoice: string | null;
  voiceRate: number;
}

const initialState: VoiceState = {
  voiceEnabled: true,
  selectedVoice: null,
  voiceRate: 1,
};

const voiceSlice = createSlice({
  name: "voice",
  initialState,
  reducers: {
    setVoiceEnabled(state, action: PayloadAction<boolean>) {
      state.voiceEnabled = action.payload;
    },
    setSelectedVoice(state, action: PayloadAction<string | null>) {
      state.selectedVoice = action.payload;
    },
    setVoiceRate(state, action: PayloadAction<number>) {
      state.voiceRate = action.payload;
    },
    resetVoiceSettings() {
      return initialState;
    },
  },
});

export const {
  setVoiceEnabled,
  setSelectedVoice,
  setVoiceRate,
  resetVoiceSettings,
} = voiceSlice.actions;
export default voiceSlice.reducer;

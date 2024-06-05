import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CreateNoteState = {
  noteTitle: string;
  noteContent: string;
  saving: boolean;
};

const initialState: CreateNoteState = {
  noteTitle: "",
  noteContent: "",
  saving: false,
};

export const createNoteSlice = createSlice({
  name: "createUser",
  initialState,
  reducers: {
    saveNoteTitle: (state, action: PayloadAction<string>) => {
      state.saving = true;
      state.noteTitle = action.payload;
    },
    saveNoteContent: (state, action: PayloadAction<string>) => {
      state.saving = true;
      state.noteContent = action.payload;
    },
  },
});

export const { saveNoteTitle, saveNoteContent } = createNoteSlice.actions;

export default createNoteSlice.reducer;

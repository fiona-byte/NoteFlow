import { CreateNoteState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: CreateNoteState = {
  id: 1,
  dateCreated: new Date(),
  noteTitle: "",
  noteContent: "",
  totalTags: 0,
  tags: [],
  favourite: false,
  saved: false,
};

export const createNoteSlice = createSlice({
  name: "createNote",
  initialState,
  reducers: {
    saveNoteTitle: (state, action: PayloadAction<string>) => {
      state.noteTitle = action.payload;
    },
    saveNoteContent: (state, action: PayloadAction<string>) => {
      state.saved = true;
      state.dateCreated = new Date()
      state.noteContent = action.payload;
    },
    addFavourite: (state) => {
      state.favourite = !state.favourite
    }
  },
});

export const { saveNoteTitle, saveNoteContent, addFavourite } = createNoteSlice.actions;

export default createNoteSlice.reducer;

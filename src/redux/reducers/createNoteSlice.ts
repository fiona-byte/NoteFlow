import { NotesProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CreateNoteState = NotesProps & {
  saving: boolean;
}

const initialState: CreateNoteState = {
  id: 1,
  dateCreated: '',
  noteTitle: "",
  noteContent: "",
  totalTags: 0,
  tags: [],
  favourite: false,
  saving: false,
};

export const createNoteSlice = createSlice({
  name: "createNote",
  initialState,
  reducers: {
    saveNoteTitle: (state, action: PayloadAction<string>) => {
      state.noteTitle = action.payload;
    },
    saveNoteContent: (state, action: PayloadAction<string>) => {
      state.saving = true;
      state.noteContent = action.payload;
    },
    addFavourite: (state) => {
      state.favourite = !state.favourite
    }
  },
});

export const { saveNoteTitle, saveNoteContent, addFavourite } = createNoteSlice.actions;

export default createNoteSlice.reducer;

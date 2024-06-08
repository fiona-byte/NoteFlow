import { NotesProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {notes: NotesProps[]} = {
    notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NotesProps>) => {
      state.notes = [...state.notes, action.payload]
    },
    editNote: (state, action: PayloadAction<Partial<NotesProps> & {id: number}>) => {
        const noteToEdit = state.notes.find(note => note.id === action.payload.id);
        if (noteToEdit) {
            noteToEdit.noteTitle = action.payload.noteTitle ?? ''
            noteToEdit.noteContent = action.payload.noteContent ?? ''
            noteToEdit.lastEdited = action.payload.lastEdited
        }
    },
    deleteNote: (state, action: PayloadAction<number>) => {
        state.notes = state.notes.filter(note => note.id !== action.payload)
    },
    addFavourite: (state, action: PayloadAction<number>) => {
        const noteToAddToFavourite = state.notes.find(note => note.id === action.payload);
        if (noteToAddToFavourite)
            noteToAddToFavourite.favourite = !noteToAddToFavourite.favourite
      },
  },
});

export const { addNote, editNote, deleteNote, addFavourite } = notesSlice.actions;

export default notesSlice.reducer;

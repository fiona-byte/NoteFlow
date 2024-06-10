import { NotesProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type NoteState = {
  notes: NotesProps[];
  deletedNotes: NotesProps[];
};

const initialState: NoteState = {
  notes: [],
  deletedNotes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NotesProps>) => {
      state.notes = [...state.notes, action.payload];
    },
    editNote: (
      state,
      action: PayloadAction<Partial<NotesProps> & { id: number }>
    ) => {
      const noteToEdit = state.notes.find(
        (note) => note.id === action.payload.id
      );
      if (noteToEdit) {
        noteToEdit.noteTitle = action.payload.noteTitle ?? "";
        noteToEdit.noteContent = action.payload.noteContent ?? "";
        noteToEdit.lastEdited = action.payload.lastEdited ?? new Date();
      }
    },
    moveToTrash: (state, action: PayloadAction<number>) => {
      const noteToDelete = state.notes.find(
        (note) => note.id === action.payload
      );
      if (noteToDelete) {
        state.notes = state.notes.filter((note) => note.id !== action.payload);
        state.deletedNotes = [...state.deletedNotes, noteToDelete];
      }
    },
    restoreNote: (state, action: PayloadAction<number>) => {
      const noteToRestore = state.deletedNotes.find(
        (note) => note.id === action.payload
      );
      if (noteToRestore) {
        state.deletedNotes = state.deletedNotes.filter(
          (note) => note.id !== action.payload
        );
        state.notes = [...state.notes, noteToRestore];
      }
    },
    emptyTrash: (state) => {
      state.deletedNotes = [];
    },
    addFavourite: (state, action: PayloadAction<number>) => {
      const noteToAddToFavourite = state.notes.find(
        (note) => note.id === action.payload
      );
      if (noteToAddToFavourite)
        noteToAddToFavourite.favourite = !noteToAddToFavourite.favourite;
    },
  },
});

export const {
  addNote,
  editNote,
  moveToTrash,
  restoreNote,
  emptyTrash,
  addFavourite,
} = notesSlice.actions;

export default notesSlice.reducer;

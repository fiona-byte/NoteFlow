import { NotesProps, TagProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type NoteState = {
  notes: NotesProps[];
  deletedNotes: NotesProps[];
  favourites: NotesProps[];
  tags: TagProps[];
};

const initialState: NoteState = {
  notes: [],
  deletedNotes: [],
  favourites: [],
  tags: [],
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
        if (noteToDelete.favourite) {
          noteToDelete.favourite = false;
          state.favourites = state.favourites.filter(
            (note) => note.id !== action.payload
          );
        }
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
    deleteNote: (state, action: PayloadAction<number>) => {
      state.deletedNotes = state.deletedNotes.filter(
        (note) => note.id !== action.payload
      );
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    deleteNoteIfEmpty: (state, action: PayloadAction<number>) => {
      const noteToDelete = state.notes.find(
        (note) => note.id === action.payload
      );
      if (!noteToDelete?.noteContent && !noteToDelete?.noteTitle) {
        state.notes = state.notes.filter((note) => note.id !== action.payload);
      }
    },
    emptyTrash: (state) => {
      state.deletedNotes = [];
    },
    addFavourite: (state, action: PayloadAction<number>) => {
      const noteToAddToFavourite = state.notes.find(
        (note) => note.id === action.payload
      );
      if (noteToAddToFavourite) {
        if (!noteToAddToFavourite.favourite) {
          noteToAddToFavourite.favourite = true;
          state.favourites = [...state.favourites, noteToAddToFavourite];
        } else {
          noteToAddToFavourite.favourite = false;
          state.favourites = state.favourites.filter(
            (note) => note.id !== noteToAddToFavourite.id
          );
        }
      }
    },
    addTag: (state, action: PayloadAction<TagProps>) => {
      state.tags = [...state.tags, action.payload];
    },
  },
});

export const {
  addNote,
  editNote,
  moveToTrash,
  deleteNote,
  deleteNoteIfEmpty,
  restoreNote,
  emptyTrash,
  addTag,
  addFavourite,
} = notesSlice.actions;

export default notesSlice.reducer;

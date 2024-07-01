import { NotesProps, TagProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type NoteState = {
  notes: NotesProps[];
  deletedNotes: NotesProps[];
  favourites: number[];
  tags: TagProps[];
  selectedTags: number[];
};

const initialState: NoteState = {
  notes: [],
  deletedNotes: [],
  favourites: [],
  tags: [],
  selectedTags: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NotesProps>) => {
      const newNotes = [...state.notes, action.payload];
      state.notes = newNotes.sort(
        (a, b) =>
          new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
      );
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
            (item) => item !== action.payload
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
    favourite: (state, action: PayloadAction<number>) => {
      const noteToAddToFavourite = state.notes.find(
        (note) => note.id === action.payload
      );
      if (noteToAddToFavourite) {
        if (!noteToAddToFavourite.favourite) {
          noteToAddToFavourite.favourite = true;
          state.favourites = [...state.favourites, noteToAddToFavourite.id];
        } else {
          noteToAddToFavourite.favourite = false;
          state.favourites = state.favourites.filter(
            (item) => item !== noteToAddToFavourite.id
          );
        }
      }
    },
    createTag: (state, action: PayloadAction<TagProps>) => {
      state.tags = [...state.tags, action.payload];
    },
    addTag: (
      state,
      action: PayloadAction<Partial<NotesProps> & { tagId: number }>
    ) => {
      const noteToAddTag = state.notes.find(
        (note) => note.id === action.payload.id
      );
      if (noteToAddTag) {
        if (noteToAddTag.tags.includes(action.payload.tagId)) {
          noteToAddTag.tags = noteToAddTag.tags.filter(
            (tag) => tag !== action.payload.tagId
          );
        } else {
          noteToAddTag.tags = [...noteToAddTag.tags, action.payload.tagId];
        }
      }
    },
    handleSelectedTags: (state, action: PayloadAction<number>) => {
      if (state.selectedTags.includes(action.payload)) {
        state.selectedTags = state.selectedTags.filter(
          (selectedTag) => selectedTag !== action.payload
        );
      } else {
        state.selectedTags = [...state.selectedTags, action.payload];
      }
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
  createTag,
  addTag,
  favourite,
  handleSelectedTags,
} = notesSlice.actions;

export default notesSlice.reducer;

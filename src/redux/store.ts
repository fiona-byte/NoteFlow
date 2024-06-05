import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import createNoteSlice from './reducers/createNoteSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  createNote: createNoteSlice
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([logger]),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
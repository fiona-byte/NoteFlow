import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNote } from "@/redux/reducers/notesSlice";

export const useCreateNote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updatedNote = {
    id: Date.now(),
    dateCreated: new Date(),
    lastEdited: new Date(),
    noteTitle: "",
    noteContent: "",
    totalTags: 0,
    tags: [],
    favourite: false,
  };

  return () => {
    dispatch(addNote(updatedNote));
    navigate(`/edit/${updatedNote.id}`);
  };
};

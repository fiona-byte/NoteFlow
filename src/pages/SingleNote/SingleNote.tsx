import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { format, isToday } from "date-fns";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import type { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  editNote,
  deleteNote,
} from "@/redux/reducers/notesSlice";
import { dateFormatter } from "@/utils/dateFormatter";
import { NotesProps } from "@/types";
import TipTap from "@/components/Editor/TipTap";
import Heart from "@/assets/svgs/heart";
import AddTag from "@/components/AddTag/AddTag";

const SingleNote = ({ note }: { note: NotesProps }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [updatedNote, setUpdatedNote] = useState<NotesProps>(note);

  const closeModal = () => {
    setIsVisible(false);
  };

  const handleNoteContent = (content: string) => {
    setUpdatedNote({
      ...updatedNote,
      noteContent: content,
    });
  };

  const handleEditNote = () => {
    const payload = {
      id: note.id,
      noteTitle: updatedNote.noteTitle,
      noteContent: updatedNote.noteContent,
      lastEdited: new Date(),
    };
    dispatch(editNote(payload));
  };

  const handleDeleteNote = (id: number) => {
    dispatch(deleteNote(id));
    navigate("/");
  };

  return (
    <div>
      {note ? (
        <>
          <div className="flex justify-between mb-12">
            <p className="text-xs md:text-base">
              Created: {dateFormatter(note.dateCreated)} at{" "}
              {format(note.dateCreated, "KK:mmaaa")}
            </p>
            {note?.lastEdited ? (
              <p className="text-xs md:text-base">
                Last edited:{" "}
                {isToday(note.lastEdited)
                  ? "Today"
                  : dateFormatter(note.lastEdited)}{" "}
                at {format(note.lastEdited, "KK:mmaaa")}
              </p>
            ) : null}
          </div>
          <div className="flex relative">
            <Input
              className="text-3xl font-medium mb-4 border-none px-0 focus-visible:ring-main placeholder:text-textColor lg:text-4xl lg:mb-5"
              placeholder="Title"
              name="noteTitle"
              value={updatedNote.noteTitle}
              onChange={(e) =>
                setUpdatedNote({ ...note, noteTitle: e.target.value })
              }
            />
            <div className="flex items-center gap-2">
              <Button variant="secondary" onClick={handleEditNote}>
                Save
              </Button>
              <Button
                onClick={() => dispatch(addFavourite(note.id))}
                size="icon"
                className="flex justify-center items-center bg-transparent md:w-8 md:h-8 hover:bg-transparent"
              >
                <Heart
                  className={cn(
                    "w-5 h-5 md:w-6 md:h-6",
                    note.favourite ? "fill-textColor" : ""
                  )}
                />
              </Button>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <MoreVertical />
                  </MenubarTrigger>
                  {isVisible ? (
                    <AddTag
                      tags={note.tags}
                      totalTags={note.totalTags}
                      styles="right-0 top-full w-1/2 md:w-1/3 lg:w-1/5"
                      closeModal={closeModal}
                    />
                  ) : (
                    <MenubarContent align="end">
                      <MenubarItem
                        onClick={() => setIsVisible(true)}
                        className="text-lg"
                      >
                        Add tag
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => handleDeleteNote(note.id)}
                        className="text-lg"
                      >
                        Delete note
                      </MenubarItem>
                    </MenubarContent>
                  )}
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
          <TipTap
            noteContent={note.noteContent}
            handleNoteContent={handleNoteContent}
          />
        </>
      ) : null}
    </div>
  );
};

const SingleNoteWrapper = () => {
  const { id } = useParams();
  const noteId = Number(id);

  const note = useSelector((store: RootState) =>
    store.notes.notes.find((note) => note.id === noteId)
  );
  if (!note) return null;

  return <SingleNote note={note} />;
};

export default SingleNoteWrapper;

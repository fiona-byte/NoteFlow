import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { format, isToday } from "date-fns";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import type { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  favourite,
  editNote,
  deleteNote,
  deleteNoteIfEmpty,
} from "@/redux/reducers/notesSlice";
import { dateFormatter } from "@/utils/dateFormatter";
import { useMobile } from "@/hooks/useMobile";
import { NotesProps } from "@/types";
import TipTap from "@/components/Editor/TipTap";
import Heart from "@/assets/svgs/heart";
import AddTag from "@/components/AddTag/AddTag";
import ArrowLeft from "@/assets/svgs/arrowLeft";

const SingleNote = ({ note }: { note: NotesProps }) => {
  const { tags } = useSelector((store: RootState) => store.notes);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMobile();

  const dateShown = isMobile
    ? format(note.dateCreated, "dd/MM/yy")
    : dateFormatter(note.dateCreated);

  const handleEditNote = (noteTitle: string, noteContent: string) => {
    const payload = {
      id: note.id,
      noteTitle: noteTitle,
      noteContent: noteContent,
      lastEdited: new Date(),
      tags: note.tags,
      favourite: note.favourite,
    };
    dispatch(editNote(payload));
  };

  useEffect(() => {
    return () => {
      dispatch(deleteNoteIfEmpty(note.id));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteNote = (id: number) => {
    dispatch(deleteNote(id));
    navigate("/");
  };

  return (
    <div className="md:mt-3">
      {note ? (
        <>
          {isMobile ? (
            <Button
              className="bg-transparent px-0 py-2 mb-8 h-0 hover:bg-transparent"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft />
            </Button>
          ) : null}
          <div className="flex justify-between mb-10 md:mb-12 md:pb-1 lg:mb-16">
            <p className="text-xs md:text-base">
              Created: {dateShown} at {format(note.dateCreated, "KK:mmaaa")}
            </p>
            {note?.lastEdited ? (
              <p className="text-xs md:text-base">
                Last edited: {isToday(note.lastEdited) ? "Today" : dateShown} at{" "}
                {format(note.lastEdited, "KK:mmaaa")}
              </p>
            ) : null}
          </div>
          <div className="flex items-center relative mb-4">
            <Input
              className="text-3xl font-medium border-none p-0 focus-visible:ring-main placeholder:text-textColor lg:text-4xl lg:mb-5"
              placeholder="Title"
              name="noteTitle"
              value={note.noteTitle}
              onChange={(e) => handleEditNote(e.target.value, note.noteContent)}
            />
            <div className="flex items-center gap-6">
              <Button
                onClick={() => dispatch(favourite(note.id))}
                size="icon"
                className="flex justify-center items-center bg-transparent w-[unset] h-[unset] md:w-8 md:h-8 hover:bg-transparent"
              >
                <Heart
                  className={cn(
                    "w-7 h-7 md:w-6 md:h-6",
                    note.favourite ? "fill-textColor" : ""
                  )}
                />
              </Button>
              <Menubar className="p-0">
                <MenubarMenu>
                  <MenubarTrigger className="w-[unset] h-[unset] p-0">
                    <MoreVertical />
                  </MenubarTrigger>
                  <MenubarContent align="end">
                    <MenubarSub>
                      <MenubarSubTrigger className="text-lg cursor-pointer">
                        Add tag
                        <MenubarSubContent>
                          <AddTag
                            tags={tags}
                            note={note}
                            styles="-right-44 w-48 md:right-0 top-full md:w-56 lg:right-72"
                          />
                        </MenubarSubContent>
                      </MenubarSubTrigger>
                    </MenubarSub>
                    {note.noteContent ? (
                      <MenubarItem
                        onClick={() => handleDeleteNote(note.id)}
                        className="text-lg"
                      >
                        Delete note
                      </MenubarItem>
                    ) : null}
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
          <TipTap note={note} handleEditNote={handleEditNote} />
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

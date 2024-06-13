import { useState } from "react";
import { cn } from "@/lib/utils";
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
import { useDispatch } from "react-redux";
import { addNote, addFavourite } from "@/redux/reducers/notesSlice";
import TipTap from "@/components/Editor/TipTap";
import Heart from "@/assets/svgs/heart";
import AddTag from "@/components/AddTag/AddTag";

const CreateNote = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [note, setNote] = useState({
    id: Date.now(),
    dateCreated: new Date(),
    lastEdited: new Date(),
    noteTitle: "",
    noteContent: "",
    totalTags: 0,
    tags: [],
    favourite: false,
    saved: false,
  });

  const closeModal = () => {
    setIsVisible(false);
  };

  const handleNoteContent = (content: string) => {
    setNote({
      ...note,
      noteContent: content,
    });
  };

  const createNote = () => {
    const { noteTitle, noteContent, tags, favourite } = note;
    const updatedTask = {
      id: Date.now(),
      dateCreated: new Date(),
      lastEdited: new Date(),
      noteTitle: noteTitle,
      noteContent: noteContent,
      totalTags: tags.length,
      tags: tags,
      favourite: favourite,
    };
    dispatch(addNote(updatedTask));
  };

  return (
    <div>
      <div className="flex relative mt-6">
        <Input
          className="text-3xl font-medium mb-4 border-none px-0 focus-visible:ring-main placeholder:text-textColor lg:text-4xl lg:mb-5"
          placeholder="Title"
          name="noteTitle"
          value={note.noteTitle}
          onChange={(e) => setNote({ ...note, noteTitle: e.target.value })}
        />
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={createNote}>
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
                  styles="right-0 top-full w-1/2 md:w-1/3 lg:w-1/5"
                  closeModal={closeModal}
                />
              ) : (
                <MenubarContent align="end">
                  <MenubarItem
                    onClick={() => setIsVisible(true)}
                    className="text-lg"
                  >
                    Add Tag
                  </MenubarItem>
                </MenubarContent>
              )}
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <TipTap handleNoteContent={handleNoteContent} />
    </div>
  );
};

export default CreateNote;

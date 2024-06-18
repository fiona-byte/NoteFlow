import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { NotesProps, TagProps } from "@/types";
import { Button } from "../ui/button";
import { htmlParser } from "@/utils/htmlParser";
import {
  addFavourite,
  deleteNote,
  moveToTrash,
  restoreNote,
} from "@/redux/reducers/notesSlice";
import Heart from "@/assets/svgs/heart";
import Tag from "@/assets/svgs/tag";
import Trash from "@/assets/svgs/trash";
import AddTag from "../AddTag/AddTag";
import RestoreTrash from "@/assets/svgs/restoreTrash";

export default function Card({
  note,
  tags,
}: {
  note: NotesProps;
  tags?: TagProps[];
}) {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div className="px-3 py-4 md:px-5 md:py-6 bg-[#571E23] rounded-3xl text-main relative">
      <div className="group">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[11px] md:text-[13px]">
            {format(note.dateCreated, "dd/MM/yy")}
          </p>
          {location.pathname !== "/trash" ? (
            <Button
              onClick={() => dispatch(addFavourite(note.id))}
              size="icon"
              className="flex justify-center items-center rounded-[50%] w-[26px] h-[26px] bg-[#48191D] md:w-8 md:h-8 hover:bg-[#48191D]"
            >
              <Heart
                className={cn(
                  "w-4 h-4 *:stroke-main md:w-5 md:h-5",
                  note.favourite ? "fill-main" : ""
                )}
              />
            </Button>
          ) : null}
        </div>
        <div className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[27%] after:bg-gradient-to-b after:from-[#571e2300] after:from-0% after:to-[#571e23] after:to-80%">
          <Link
            to={`/edit/${note.id}`}
            className="block mb-3 md:text-[19px] font-normal truncate lg:mb-2"
          >
            {!note.noteTitle ? "Untitled" : note.noteTitle}
          </Link>
          <div className="text-sm font-light leading-6 overflow-hidden max-h-20 h-20 line-clamp-3 md:text-base">
            {htmlParser(note.noteContent)}
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center gap-2.5 md:gap-3 lg:invisible lg:translate-y-4 lg:group-hover:visible lg:group-hover:transition-all lg:group-hover:ease-in lg:group-hover:translate-y-0 lg:group-hover:duration-[250ms]">
            {location.pathname === "/trash" ? (
              <>
                <Button
                  onClick={() => dispatch(restoreNote(note.id))}
                  size="icon"
                  title="Restore"
                  className="flex items-center w-8 h-8 mt-3 ml-auto bg-[#48191D] hover:bg-[#48191D] rounded-[50%] lg:mt-6"
                >
                  <RestoreTrash className="*:stroke-main w-[18px] h-[18px]" />
                </Button>
                <Button
                  onClick={() => dispatch(deleteNote(note.id))}
                  size="icon"
                  title="Delete forever"
                  className="flex items-center w-8 h-8 mt-3 ml-auto bg-[#48191D] hover:bg-[#48191D] rounded-[50%] lg:mt-6"
                >
                  <Trash className="*:stroke-main w-[18px] h-[18px]" />
                </Button>
              </>
            ) : (
              <Button
                onClick={() => dispatch(moveToTrash(note.id))}
                size="icon"
                title="Move to trash"
                className="flex items-center w-8 h-8 mt-3 ml-auto bg-[#48191D] hover:bg-[#48191D] rounded-[50%] lg:mt-6"
              >
                <Trash className="*:stroke-main w-[18px] h-[18px]" />
              </Button>
            )}
          </div>
          {location.pathname !== "/trash" ? (
            <Button
              onClick={() => setIsVisible(!isVisible)}
              title="Add tag"
              className="flex items-center text-main font-normal h-[unset] px-2 py-1 mt-3 ml-auto bg-[#48191D] hover:bg-[#48191D] rounded-lg w-fit lg:mt-6"
            >
              <Tag />
              <span className="text-[13px] pl-2">{note.tags.length}</span>
            </Button>
          ) : null}
        </div>
      </div>
      {isVisible && tags ? (
        <AddTag
          tags={tags}
          note={note}
          styles="left-0 w-full"
          closeModal={closeModal}
        />
      ) : null}
    </div>
  );
}

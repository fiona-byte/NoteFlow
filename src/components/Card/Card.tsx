import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { NotesProps } from "@/types";
import { Button } from "../ui/button";
import { htmlParser } from "@/utils/htmlParser";
import { addFavourite, deleteNote } from "@/redux/reducers/notesSlice";
import Heart from "@/assets/svgs/heart";
import Tag from "@/assets/svgs/tag";
import Trash from "@/assets/svgs/trash";
import AddTag from "../AddTag/AddTag";

export default function Card({ note }: { note: NotesProps }) {
  const [isVisible, setIsVisible] = useState(false);
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
          <div className="flex items-center gap-3 invisible translate-y-4 lg:group-hover:visible lg:group-hover:transition-all lg:group-hover:ease-in lg:group-hover:translate-y-0 lg:group-hover:duration-[250ms]">
            <Button
              onClick={() => dispatch(deleteNote(note.id))}
              size="icon"
              className="flex items-center w-8 h-8 mt-3 ml-auto bg-[#48191D] hover:bg-[#48191D] rounded-[50%] lg:mt-6"
            >
              <Trash className="*:stroke-main w-[18px] h-[18px]" />
            </Button>
          </div>
          <Button
            onClick={() => setIsVisible(!isVisible)}
            className="flex items-center h-[unset] px-2 py-1 mt-3 ml-auto bg-[#48191D] hover:bg-[#48191D] rounded-lg w-fit lg:mt-6"
          >
            <Tag />
            <span className="text-[13px] pl-2">{note.totalTags}</span>
          </Button>
        </div>
      </div>
      {isVisible ? (
        <AddTag
          tags={note.tags}
          totalTags={note.totalTags}
          styles="left-0 w-full"
          closeModal={closeModal}
        />
      ) : null}
    </div>
  );
}

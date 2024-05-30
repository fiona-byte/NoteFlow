import { cn } from "@/lib/utils";
import { NotesProps } from "@/types";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus, SquareCheckBig, X } from "lucide-react";
import Heart from "@/assets/svgs/heart";
import Tag from "@/assets/svgs/tag";
import Trash from "@/assets/svgs/trash";

export default function Card({ note }: { note: NotesProps }) {
  return (
    <div className="px-3 py-4 md:px-5 md:py-6 bg-[#571E23] rounded-3xl text-main relative">
      <div className="group">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[11px] md:text-[13px]">{note.dateCreated}</p>
          <Button
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
          <h3 className="mb-3 md:text-[19px] font-normal truncate lg:mb-2">
            {note.noteTitle}
          </h3>
          <p className="text-sm font-light leading-6 overflow-hidden max-h-20 h-20 line-clamp-3 md:text-base">
            {note.noteContent}
          </p>
        </div>
        <div className="flex">
          <div className="flex items-center gap-3 invisible translate-y-4 lg:group-hover:visible lg:group-hover:transition-all lg:group-hover:ease-in lg:group-hover:translate-y-0 lg:group-hover:duration-[250ms]">
            <Button
              size="icon"
              className="flex items-center w-8 h-8 mt-3 ml-auto bg-[#48191D] hover:bg-[#48191D] rounded-[50%] lg:mt-6"
            >
              <Trash className="*:stroke-main w-[18px] h-[18px]" />
            </Button>
          </div>
          <Button className="flex items-center h-[unset] px-2 py-1 mt-3 ml-auto bg-[#48191D] hover:bg-[#48191D] rounded-lg w-fit lg:mt-6">
            <Tag />
            <span className="text-[13px] pl-2">{note.totalTags}</span>
          </Button>
        </div>
      </div>
      <div className="p-4 invisible absolute left-0 bg-main text-textColor shadow rounded-2xl w-full z-10 lg:p-5">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg md:text-[19px] lg:text-xl">
            Labels
          </h4>
          <X size="22" />
        </div>
        <Input
          type="text"
          className="px-3 py-1.5 md:py-2 h-[unset] rounded-lg text-sm mt-3 mb-4 md:mt-4 md:mb-6"
          placeholder="Search labels"
        />
        {note.totalTags ? (
          <div>
            {note.tags.map((tag) => (
              <div className="flex items-center pt-2 first:pt-0">
                <SquareCheckBig size="18" />
                <span className="pl-2.5">{tag}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5">
            <Button className="flex items-center mx-auto px-3 h-9 font-normal hover:bg-textColor">
              <Plus size="18" />
              <span className="pl-1 md:pl-1.5">Add Label</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

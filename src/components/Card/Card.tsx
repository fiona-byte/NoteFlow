import { cn } from "@/lib/utils";
import { NotesProps } from "@/types";
import { Button } from "../ui/button";
import Heart from "@/assets/svgs/heart";
import Tag from "@/assets/svgs/tag";

export default function Card({ note }: { note: NotesProps }) {
  return (
    <div className="px-3 py-4 md:px-5 md:py-6 bg-[#571E23] rounded-3xl text-main">
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
      <Button className="flex items-center h-[unset] px-2 py-1 mt-3 ml-auto bg-[#48191D] hover:bg-[#48191D] rounded-lg w-fit lg:mt-6">
        <Tag />
        <span className="text-[13px] pl-2">{note.totalTags}</span>
      </Button>
    </div>
  );
}

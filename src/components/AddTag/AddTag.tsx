import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus, SquareCheckBig, X } from "lucide-react";

type AddTagProps = {
  tags: string[];
  totalTags: number;
  styles: string;
  closeModal: () => void;
};

export default function AddTag({
  tags,
  totalTags,
  styles,
  closeModal,
}: AddTagProps) {
  return (
    <div
      className={cn(
        "p-4 absolute bg-main text-textColor shadow rounded-2xl z-10 lg:p-5",
        styles
      )}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-lg md:text-[19px] lg:text-xl">Tags</h4>
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-transparent"
          onClick={() => closeModal()}
        >
          <X size="22" />
        </Button>
      </div>
      {totalTags ? (
        <>
          <Input
            type="text"
            name="searchTags"
            className="px-3 py-1.5 md:py-2 h-[unset] rounded-lg text-sm mt-3 mb-4 md:mt-4 md:mb-6"
            placeholder="Search tags"
          />
          <div>
            {tags.map((tag) => (
              <div key={tag} className="flex items-center pt-2 first:pt-0">
                <SquareCheckBig size="18" />
                <span className="pl-2.5">{tag}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <Input
            type="text"
            className="px-3 py-1.5 md:py-2 h-[unset] rounded-lg text-sm mt-3 mb-4 md:mt-4 md:mb-6"
            placeholder="Tag name"
            name="tagName"
          />
          <div className="mt-5">
            <Button className="flex items-center mx-auto px-3 h-9 font-normal hover:bg-textColor">
              <Plus size="18" />
              <span className="pl-1 md:pl-1.5">Add Tag</span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

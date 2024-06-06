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
import type { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, saveNoteTitle } from "@/redux/reducers/createNoteSlice";
import TipTap from "@/components/Editor/TipTap";
import Heart from "@/assets/svgs/heart";
import AddTag from "@/components/AddTag/AddTag";

const CreateNote = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { noteTitle, favourite, tags, totalTags } = useSelector(
    (store: RootState) => store.createNote
  );
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <div className="flex relative">
        <Input
          className="text-3xl font-medium mb-4 border-none px-0 focus-visible:ring-main placeholder:text-textColor lg:text-4xl lg:mb-5"
          placeholder="Title"
          value={noteTitle}
          onChange={(e) => dispatch(saveNoteTitle(e.target.value))}
        />
        <div className="flex items-center gap-2">
          <Button
            onClick={() => dispatch(addFavourite())}
            size="icon"
            className="flex justify-center items-center bg-transparent md:w-8 md:h-8 hover:bg-transparent"
          >
            <Heart
              className={cn(
                "w-5 h-5 md:w-6 md:h-6",
                favourite ? "fill-textColor" : ""
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
                  tags={tags}
                  totalTags={totalTags}
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
      <TipTap />
    </div>
  );
};

export default CreateNote;

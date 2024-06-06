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

const CreateNote = () => {
  const { noteTitle, favourite } = useSelector(
    (store: RootState) => store.createNote
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex">
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
              <MenubarContent align="end">
                <MenubarItem className="text-lg">Add Tag</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <TipTap />
    </div>
  );
};

export default CreateNote;

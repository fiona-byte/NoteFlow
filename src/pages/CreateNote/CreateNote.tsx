import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { MoreVertical } from "lucide-react";
import TipTap from "@/components/Editor/TipTap";

const CreateNote = () => {
  return (
    <div>
      <div className="flex">
        <Input
          className="text-3xl font-medium mb-4 border-none px-0 focus-visible:ring-main placeholder:text-textColor lg:text-4xl lg:mb-5"
          placeholder="Title"
        />
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
      <TipTap />
    </div>
  );
};

export default CreateNote;

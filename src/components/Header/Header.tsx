import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ListFilterIcon, Search } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";

function Header() {
  const isMobile = useMobile();
  return (
    <div className="flex justify-between items-center pb-10 md:pb-14 lg:pb-20">
      <div className="relative md:w-1/2 lg:w-1/3">
        <Search className="absolute left-4 top-4 h-4 w-4" />
        <Input
          className="pr-5 pl-10 py-6 rounded-[10px] text-base"
          type="search"
          placeholder="Search notes"
        />
      </div>
      <div className="flex md:gap-6 lg:gap-8">
        <Button
          variant="outline"
          className="px-5 py-6 rounded-[10px] hover:bg-transparent"
        >
          <ListFilterIcon />
        </Button>
        {!isMobile ? (
          <Button className="text-[19px] font-normal px-5 py-6 border border-textColor hover:bg-textColor rounded-[10px]">
            Add
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Header;

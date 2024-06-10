import { useNavigate } from "react-router-dom";
import { ListFilterIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/useMobile";

function Header() {
  const isMobile = useMobile();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center pb-10 md:pb-12 lg:pb-14">
      <div className="relative md:w-1/2 lg:w-1/3">
        <Search className="absolute left-4 top-4 h-4 w-4" />
        <Input
          className="pr-5 pl-10 py-6 rounded-xl text-base"
          type="search"
          placeholder="Search notes"
        />
      </div>
      <div className="flex md:gap-4">
        <Button
          variant="outline"
          className="px-5 py-6 rounded-xl hover:bg-transparent"
        >
          <ListFilterIcon />
        </Button>
        {!isMobile ? (
          <Button
            onClick={() => navigate("/create")}
            className="text-[19px] font-normal px-5 py-6 border border-textColor hover:bg-textColor rounded-xl"
          >
            Add
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Header;

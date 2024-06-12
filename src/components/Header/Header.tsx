import { Link, useNavigate } from "react-router-dom";
import { ListFilterIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/useMobile";

function Header() {
  const isMobile = useMobile();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center gap-6 pb-10 md:pb-12 lg:pb-14 lg:gap-0">
      {isMobile ? (
        <Link to="/" className="text-lg">
          NoteFlow
        </Link>
      ) : null}
      <div className="flex gap-2 md:justify-between md:w-full">
        <div className="relative md:w-1/2 lg:w-1/3">
          <Search className="absolute left-3 top-3 h-4 w-4 md:top-4 md:left-4" />
          <Input
            className="pr-4 pl-8 py-5 rounded-xl text-base md:pr-5 md:pl-10 md:py-6"
            type="search"
            placeholder="Search notes"
          />
        </div>
        <div className="flex md:gap-4">
          <Button
            variant="outline"
            className="px-4 py-5 rounded-xl hover:bg-transparent md:pr-5 md:py-6"
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
    </div>
  );
}

export default Header;

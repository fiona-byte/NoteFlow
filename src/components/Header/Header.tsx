import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { ListFilterIcon, Plus, Search } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/useMobile";
import { useCreateNote } from "@/hooks/useCreateNote";
import FilterCard from "../FilterCard/FilterCard";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const addNote = useCreateNote();
  const isMobile = useMobile();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return (
    <div className="flex justify-between items-center gap-6 pb-10 md:pb-12 lg:pb-14 lg:gap-0">
      {isMobile ? (
        <Link to="/" className="text-2xl font-cursive">
          NoteFlow
        </Link>
      ) : null}
      <div className="flex gap-2 md:justify-between md:w-full">
        <div className="relative md:w-1/2 lg:w-1/3">
          <span className="absolute left-3 top-3 md:top-4 md:left-4">
            <Search color="#3A3235" className="h-4 w-4" />
          </span>
          <Input
            className="pr-4 pl-8 py-5 rounded-xl text-base md:pr-5 md:pl-10 md:py-6"
            type="search"
            placeholder="Search notes"
            value={query}
            onChange={(e) => {
              const term = e.target.value;
              navigate(term ? `/search?q=${term}` : "/");
            }}
          />
        </div>
        <div className="flex relative md:gap-4">
          <Popover>
            <PopoverTrigger className="px-4 py-2 border rounded-xl hover:bg-transparent md:pr-5">
              <ListFilterIcon />
            </PopoverTrigger>
            <PopoverContent>
              <FilterCard />
            </PopoverContent>
          </Popover>
          {!isMobile ? (
            <Button
              onClick={() => addNote()}
              className="text-lg font-normal px-5 py-6 border border-textColor hover:bg-textColor rounded-xl lg:text-[19px]"
            >
              Add
            </Button>
          ) : !location.pathname.includes("edit") ? (
            <Button
              onClick={() => addNote()}
              className="absolute top-[42rem] right-4 z-10 w-14 h-14 bg-tertiary border-none hover:bg-tertiary rounded-full"
            >
              <Plus stroke="1.5" className="stroke-textColor" />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;

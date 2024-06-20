import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { ListFilterIcon, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/useMobile";
import { useCreateNote } from "@/hooks/useCreateNote";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const addNote = useCreateNote();
  const isMobile = useMobile();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const pathnameCondition = location.pathname.includes("edit");

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
            <Search className="h-4 w-4" />
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
        <div className="flex md:gap-4">
          <Button
            variant="outline"
            className="px-4 py-5 rounded-xl hover:bg-transparent md:pr-5 md:py-6"
          >
            <ListFilterIcon />
          </Button>
          {!isMobile ? (
            <Button
              onClick={() => addNote()}
              className="text-[19px] font-normal px-5 py-6 border border-textColor hover:bg-textColor rounded-xl"
            >
              Add
            </Button>
          ) : !pathnameCondition ? (
            <Button
              onClick={() => addNote()}
              className="absolute bottom-28 right-4 z-10 w-14 h-14 bg-tertiary border-none hover:bg-tertiary rounded-full"
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

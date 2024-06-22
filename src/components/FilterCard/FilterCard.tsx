import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { X } from "lucide-react";

const FilterCard = () => {
  const { tags } = useSelector((store: RootState) => store.notes);

  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = tags.filter(({ tagName }) =>
    tagName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-3.5 absolute top-12 right-0 md:right-24 md:top-16 lg:right-24 w-64 bg-main text-textColor shadow rounded-[20px] z-10 md:p-4 lg:py-5">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-lg md:text-[19px] lg:text-xl">
          Filter by tags
        </h4>
        <Button
          size="icon"
          variant="ghost"
          className="h-[unset] w-[unset] hover:bg-transparent"
        >
          <X size="22" />
        </Button>
      </div>
      <Input
        type="text"
        name="searchTags"
        className="px-3 py-1.5 md:py-2 h-[unset] rounded-lg text-sm mt-3 mb-4 md:mt-4"
        placeholder="Search tags"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {searchResults.map(({ tagId, tagName }) => (
          <div key={tagId} className="flex items-center pt-2 first:pt-0">
            <Checkbox />
            <span className="pl-2.5">{tagName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCard;

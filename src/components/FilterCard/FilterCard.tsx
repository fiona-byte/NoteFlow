import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { X } from "lucide-react";
import { handleSelectedTags } from "@/redux/reducers/notesSlice";

const FilterCard = ({ handleClose }: { handleClose: () => void }) => {
  const { tags, selectedTags } = useSelector((store: RootState) => store.notes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = tags.filter(({ tagName }) =>
    tagName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChecked = (tagId: number) => {
    navigate("/notes");
    dispatch(handleSelectedTags(tagId));
  };

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
          onClick={handleClose}
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
        {searchResults?.length > 0 ? (
          searchResults.map(({ tagId, tagName }) => (
            <div key={tagId} className="flex items-center pt-2 first:pt-0">
              <Checkbox
                checked={selectedTags.includes(tagId)}
                onCheckedChange={() => handleChecked(tagId)}
              />
              <span className="pl-2.5">{tagName}</span>
            </div>
          ))
        ) : searchQuery ? (
          <p className="text-sm">
            No results for <span className="font-medium">“{searchQuery}”</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default FilterCard;

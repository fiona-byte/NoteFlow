import { useState } from "react";
import { useDispatch } from "react-redux";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { createTag, addTag } from "@/redux/reducers/notesSlice";
import { NotesProps, TagProps } from "@/types";

type CreateTagProps = {
  note: NotesProps;
  tags: TagProps[];
  styles: string;
};

export default function AddTag({ note, tags, styles }: CreateTagProps) {
  const dispatch = useDispatch();
  const [tagName, setTagName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = tags.filter(({ tagName }) =>
    tagName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateTag = (tag: string) => {
    const payload = {
      tagId: Date.now(),
      tagName: tag,
    };
    dispatch(createTag(payload));
    setTagName("");
    setSearchQuery("");
  };

  const handleCheckedChange = (tagId: number) => {
    const payload = {
      ...note,
      tagId,
    };
    dispatch(addTag(payload));
  };

  return (
    <div
      className={cn(
        "p-3.5 bg-main text-textColor shadow rounded-[20px] z-10 md:p-4 lg:py-5",
        styles
      )}
    >
      <h4 className="font-medium text-lg md:text-[19px] lg:text-xl">Tags</h4>
      {tags?.length > 0 ? (
        <>
          <Input
            type="text"
            name="searchTags"
            className="px-3 py-1.5 md:py-2 h-[unset] rounded-lg text-sm mt-3 mb-4 md:mt-4"
            placeholder="Search tags"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="max-h-[120px] overflow-x-auto">
            {searchResults?.length > 0 ? (
              searchResults.map((tag) => (
                <div
                  key={tag.tagId}
                  className="flex items-center pt-2 first:pt-0"
                >
                  <Checkbox
                    id="tags"
                    checked={note.tags.includes(tag.tagId)}
                    onCheckedChange={() => handleCheckedChange(tag.tagId)}
                  />
                  <label
                    htmlFor="tags"
                    className="pl-2.5 first-letter:uppercase"
                  >
                    {tag.tagName}
                  </label>
                </div>
              ))
            ) : (
              <p className="text-sm">
                Create tag{" "}
                <Button
                  variant="ghost"
                  className="h-0 px-0 w-fit font-medium text-sm hover:bg-main"
                  onClick={() => handleCreateTag(searchQuery)}
                >
                  “{searchQuery}”
                </Button>
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <Input
            type="text"
            className="px-3 py-1.5 md:py-2 h-[unset] rounded-lg text-sm mt-3 mb-4 md:mt-4 md:mb-0"
            placeholder="Enter a tag name"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            name="tagName"
          />
          <div className="mt-2.5">
            {tagName ? (
              <p className="text-sm">
                Create tag{" "}
                <Button
                  variant="ghost"
                  className="h-0 px-0 w-fit font-medium text-sm hover:bg-main"
                  onClick={() => handleCreateTag(tagName)}
                >
                  “{tagName}”
                </Button>
              </p>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}

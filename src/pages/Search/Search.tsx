import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Card from "@/components/Card/Card";
import EmptyPage from "@/components/EmptyPage/EmptyPage";
import NoResultsIllustration from "@/assets/svgs/noResults";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const searchResults = useSelector((store: RootState) =>
    store.notes.notes.filter(
      (note) =>
        note.noteTitle.toLowerCase().includes(query.toLowerCase()) ||
        note.noteContent.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div>
      {searchResults.length === 0 ? (
        <EmptyPage
          pageHeading="No Results"
          pageSubTitle="There are no results for this query."
          PageIllustration={NoResultsIllustration}
        />
      ) : (
        <>
          <h2 className="font-medium text-[28px] lg:text-[33px]">
            Results ({searchResults.length})
          </h2>
          <div className="grid grid-cols-2 gap-5 mt-6 md:grid-cols-3 lg:grid-cols-4 lg:mt-8 md:gap-y-8">
            {searchResults?.map((note) => (
              <Card note={note} key={note.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;

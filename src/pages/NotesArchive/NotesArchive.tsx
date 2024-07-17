import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import NoNotesIllustration from "@/assets/svgs/noNotes";
import Card from "@/components/Card/Card";
import EmptyPage from "@/components/EmptyPage/EmptyPage";
import NoFilterResultsIllustration from "@/assets/svgs/noFilterResults";

function NotesArchive() {
  const { notes, tags, selectedTags } = useSelector(
    (store: RootState) => store.notes
  );

  const filteredNotes =
    selectedTags.length > 0
      ? notes.filter((note) =>
          note.tags.some((tagId) => selectedTags.includes(tagId))
        )
      : notes;

  return (
    <div>
      {notes.length <= 0 ? (
        <EmptyPage
          pageHeading="No Notes"
          pageSubTitle="You have not added any notes, click the button below to add one."
          PageIllustration={NoNotesIllustration}
        />
      ) : (
        <>
          {selectedTags.length > 0 ? (
            <>
              <h2 className="font-medium text-[28px] lg:text-[33px]">
                {selectedTags.length > 0
                  ? `Results (${filteredNotes.length})`
                  : "All Notes"}
              </h2>
              <div className="grid grid-cols-2 gap-5 mt-4 md:grid-cols-3 md:gap-y-8 lg:grid-cols-4">
                {filteredNotes?.map((note) => (
                  <Card note={note} tags={tags} key={note.id} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex justify-center flex-col items-center p-4 w-full absolute top-[42%] left-2/4 translate-x-[-50%] translate-y-[-50%] lg:top-[44%]">
              <NoFilterResultsIllustration className="w-28 h-28 lg:w-32 lg:h-32" />
              <div className="mt-6">
                <h2 className="text-[28px] font-medium mb-2 text-center">
                  No Results{" "}
                </h2>
                <p className="text-center md:text-[17px] lg:text-[19px]">
                  There are no notes for this tag.
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default NotesArchive;

import NoNotesIllustration from "@/assets/svgs/noNotes";
import Card from "@/components/Card/Card";
import EmptyPage from "@/components/EmptyPage/EmptyPage";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

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
          <h2 className="font-medium text-[28px] lg:text-[33px]">All Notes</h2>
          <div className="grid grid-cols-2 gap-5 mt-4 md:grid-cols-3 md:gap-y-8 lg:grid-cols-4">
            {filteredNotes?.map((note) => (
              <Card note={note} tags={tags} key={note.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default NotesArchive;

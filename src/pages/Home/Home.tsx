import { Link } from "react-router-dom";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import NoNotesIllustration from "@/assets/svgs/noNotes";
import Card from "@/components/Card/Card";
import EmptyPage from "@/components/EmptyPage/EmptyPage";

function Home() {
  const { notes, favourites, tags } = useSelector(
    (store: RootState) => store.notes
  );

  const favouriteNotes =
    favourites.length > 0
      ? notes.filter((note) => favourites.includes(note.id))
      : null;
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
          {favourites.length ? (
            <div className="mb-12">
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-[28px] lg:text-[33px]">
                  Favourites
                </h2>
                {favourites.length >= 4 ? (
                  <Link
                    to="/favourites"
                    className="relative before:content-[''] before:block before:h-[1.5px] before:w-full before:bg-border before:rounded-sm before:absolute before:bottom-0 before:left-0 lg:before:origin-right lg:before:scale-x-0 lg:before:transition-transform hover:lg:before:origin-left hover:lg:before:scale-x-100 lg:text-lg"
                  >
                    View all
                  </Link>
                ) : null}
              </div>
              <div className="grid grid-cols-2 gap-5 mt-4 md:grid-cols-3 lg:grid-cols-4 md:gap-y-8">
                {favouriteNotes?.slice(0, 4).map((note) => (
                  <Card note={note} tags={tags} key={note.id} />
                ))}
              </div>
            </div>
          ) : null}
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-[28px] lg:text-[33px]">
              Recent Notes
            </h2>
            {notes.length >= 4 ? (
              <Link
                to="/notes"
                className="relative before:content-[''] before:block before:h-[1.5px] before:w-full before:bg-border before:rounded-sm before:absolute before:bottom-0 before:left-0 lg:before:origin-right lg:before:scale-x-0 lg:before:transition-transform hover:lg:before:origin-left hover:lg:before:scale-x-100 lg:text-lg"
              >
                View all
              </Link>
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-5 mt-4 md:grid-cols-3 md:gap-y-8 lg:grid-cols-4">
            {notes.slice(0, 4).map((note) => (
              <Card note={note} tags={tags} key={note.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;

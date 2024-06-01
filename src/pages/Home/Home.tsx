import { Link } from "react-router-dom";
import { NotesProps } from "@/types";
import NoNotesIllustration from "@/assets/svgs/noNotes";
import Card from "@/components/Card/Card";
import EmptyPage from "@/components/EmptyPage/EmptyPage";

function Home() {
  const notes: NotesProps[] = [
    {
      id: 1,
      dateCreated: "28/05/24",
      noteTitle: "Sunken",
      noteContent:
        "My mind started to spin as the rain kept drumming on my skin.",
      totalTags: 1,
      tags: ["Poems"],
      favourite: true,
    },
    {
      id: 2,
      dateCreated: "04/06/24",
      noteTitle: "Plans for the year",
      noteContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum consequatur totam fuga tempore! At perferendis corporis placeat totam officia.",
      totalTags: 4,
      tags: ["ToDo", "Plans", "Motivation", "Personal"],
      favourite: false,
    },
    {
      id: 3,
      dateCreated: "04/06/24",
      noteTitle: "Plans for the year",
      noteContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum consequatur totam fuga tempore! At perferendis corporis placeat totam officia.",
      totalTags: 0,
      tags: [],
      favourite: false,
    },
    {
      id: 4,
      dateCreated: "04/06/24",
      noteTitle: "Plans for the year",
      noteContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum consequatur totam fuga tempore! At perferendis corporis placeat totam officia.",
      totalTags: 0,
      tags: [],
      favourite: true,
    },
    {
      id: 5,
      dateCreated: "04/06/24",
      noteTitle: "Plans for the year",
      noteContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum consequatur totam fuga tempore! At perferendis corporis placeat totam officia.",
      totalTags: 0,
      tags: [],
      favourite: true,
    },
  ];
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
          <div className="mb-16">
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-[28px] lg:text-[33px]">
                Favourites
              </h2>
              {notes.length >= 4 ? (
                <Link
                  to="/favourites"
                  className="relative before:content-[''] before:block before:h-[1.5px] before:w-full before:bg-border before:rounded-sm before:absolute before:bottom-0 before:left-0 lg:before:origin-right lg:before:scale-x-0 lg:before:transition-transform hover:lg:before:origin-left hover:lg:before:scale-x-100 lg:text-lg"
                >
                  View all
                </Link>
              ) : null}
            </div>
            <div className="grid grid-cols-2 gap-5 mt-6 md:grid-cols-3 lg:grid-cols-4 md:gap-y-8">
              {notes.slice(0, 4).map((note) => {
                if (note.favourite === true)
                  return <Card note={note} key={note.id} />;
              })}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-[28px] lg:text-[33px]">
              All Notes
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
          <div className="grid grid-cols-2 gap-5 mt-6 md:grid-cols-3 lg:grid-cols-4 md:gap-y-8">
            {notes.slice(0, 4).map((note) => (
              <Card note={note} key={note.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;

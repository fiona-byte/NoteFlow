import { NotesProps } from "@/types";
import NoNotesIllustration from "@/assets/svgs/noNotes";
import Card from "@/components/Card/Card";
import EmptyPage from "@/components/EmptyPage/EmptyPage";

function NotesArchive() {
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
          <h2 className="font-medium text-[28px] lg:text-[33px]">My Notes</h2>
          <div className="grid grid-cols-2 gap-5 mt-6 md:grid-cols-3 lg:grid-cols-4 lg:mt-8 md:gap-y-8">
            {notes?.map((note) => (
              <Card note={note} key={note.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default NotesArchive;

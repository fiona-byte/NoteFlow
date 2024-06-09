import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Button } from "@/components/ui/button";
import { emptyTrash } from "@/redux/reducers/notesSlice";
import NoDeletedNotes from "@/assets/svgs/noDeletedNotes";
import Card from "@/components/Card/Card";
import EmptyPage from "@/components/EmptyPage/EmptyPage";

export default function Trash() {
  const { deletedNotes } = useSelector((store: RootState) => store.notes);
  const dispatch = useDispatch();

  return (
    <div>
      {deletedNotes?.length ? (
        <>
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-[28px] lg:text-[33px]">Trash</h2>
            <Button
              onClick={() => dispatch(emptyTrash())}
              variant="ghost"
              className="relative text-base h-8 font-normal p-0 hover:bg-transparent before:content-[''] before:block before:h-[1.5px] before:w-full before:bg-border before:rounded-sm before:absolute before:bottom-0 before:left-0 lg:before:origin-right lg:before:scale-x-0 lg:before:transition-transform hover:lg:before:origin-left hover:lg:before:scale-x-100 lg:text-lg"
            >
              Empty trash
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-6 md:grid-cols-3 lg:grid-cols-4 lg:mt-8 md:gap-y-8">
            {deletedNotes.map((note) => (
              <Card note={note} key={note.id} />
            ))}
          </div>
        </>
      ) : (
        <EmptyPage
          pageHeading="Trash empty"
          pageSubTitle="You do not have any notes in the trash."
          PageIllustration={NoDeletedNotes}
        />
      )}
    </div>
  );
}

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Card from "@/components/Card/Card";
import NoFavourites from "@/assets/svgs/noFavourites";
import EmptyPage from "@/components/EmptyPage/EmptyPage";

export default function Favourite() {
  const { favourites } = useSelector((state: RootState) => state.notes);
  return (
    <div>
      {favourites.length ? (
        <>
          <h2 className="font-medium text-[28px] lg:text-[33px]">Favourites</h2>
          <div className="grid grid-cols-2 gap-5 mt-6 md:grid-cols-3 lg:grid-cols-4 lg:mt-8 md:gap-y-8">
            {favourites.map((note) => (
              <Card note={note} key={note.id} />
            ))}
          </div>
        </>
      ) : (
        <EmptyPage
          pageHeading="No Favourites"
          pageSubTitle="You have not added any notes to favourite yet."
          PageIllustration={NoFavourites}
        />
      )}
    </div>
  );
}

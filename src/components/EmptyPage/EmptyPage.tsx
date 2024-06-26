import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { EmptyPageProps } from "@/types";
import { useCreateNote } from "@/hooks/useCreateNote";

function EmptyPage({
  pageHeading,
  pageSubTitle,
  PageIllustration,
}: EmptyPageProps) {
  const location = useLocation();
  const addNote = useCreateNote();

  const pathnameCondition =
    location.pathname === "/" || location.pathname === "/notes";

  return (
    <div className="flex justify-center flex-col items-center p-4 w-full absolute top-[42%] left-2/4 translate-x-[-50%] translate-y-[-50%] lg:top-[44%]">
      <PageIllustration className="w-28 h-28 lg:w-32 lg:h-32" />
      <div className="mt-6">
        <h2 className="text-[28px] font-medium mb-2 text-center">
          {pageHeading}
        </h2>
        <p className="text-center md:text-[17px] lg:text-[19px]">
          {pageSubTitle}
        </p>
        {pathnameCondition ? (
          <Button
            onClick={() => addNote()}
            className="px-6 py-6 mt-6 font-normal text-[17px] mx-auto flex lg:text-[19px] hover:bg-textColor"
          >
            Add Note
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default EmptyPage;

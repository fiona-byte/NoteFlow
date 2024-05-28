import { Link } from "react-router-dom";

function NotesArchive() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-[28px] lg:text-[33px]">All Notes</h2>
        <Link
          to="/"
          className="relative before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:h-[1.5px] before:w-full before:bg-border before:rounded-sm hover:before:origin-left hover:before:scale-x-100 lg:text-lg"
        >
          View all
        </Link>
      </div>
    </div>
  );
}

export default NotesArchive;

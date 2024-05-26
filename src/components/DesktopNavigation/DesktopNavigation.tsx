import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavigationLinksProps } from "@/types";
import Heart from "@/assets/svgs/heart";
import NotesIcon from "@/assets/svgs/notes";
import Trash from "@/assets/svgs/trash";

const navigationLinks: NavigationLinksProps[] = [
  { path: "/", Icon: NotesIcon },
  { path: "/favourites", Icon: Heart },
  { path: "/trash", Icon: Trash },
];

export default function DesktopNavigation() {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 h-full bg-main px-5 pt-10 z-10 shadow lg:px-8 lg:pt-12",
        "navigation-container"
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="pb-12 text-center lg:pb-14">
          <Link to="/" className="text-xl">
            NoteFlow
          </Link>
        </div>
        <ul>
          {navigationLinks.map(({ path, Icon }, index) => (
            <li key={index} className="pb-5 lg:pb-6">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  cn("p-3 inline-flex", {
                    "bg-tertiary rounded-[50%]": isActive,
                  })
                }
              >
                {({ isActive }) => (
                  <Icon className={isActive ? "w-8 h-8" : ""} />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

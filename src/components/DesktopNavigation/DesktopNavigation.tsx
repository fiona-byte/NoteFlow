import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavigationLinksProps } from "@/types";
import Heart from "@/assets/svgs/heart";
import NotesIcon from "@/assets/svgs/notes";
import Trash from "@/assets/svgs/trash";

const navigationLinks: NavigationLinksProps[] = [
  { path: "/", icon: <NotesIcon /> },
  { path: "/favourites", icon: <Heart /> },
  { path: "/trash", icon: <Trash /> },
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
        <div className="pb-8 text-center lg:pb-10">
          <Link to="/" className="text-xl">
            NoteFlow
          </Link>
        </div>
        <ul className="">
          {navigationLinks.map(({ path, icon }, index) => (
            <li key={index} className="pb-5 lg:pb-6">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  cn("p-3 inline-flex", {
                    "bg-tertiary rounded-[50%]": isActive,
                  })
                }
              >
                {icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

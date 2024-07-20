import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SidebarLinksProps } from "@/types";
import Heart from "@/assets/svgs/heart";
import NotesIcon from "@/assets/svgs/notes";
import Trash from "@/assets/svgs/trash";
import "./style.css";

const navigationLinks: SidebarLinksProps[] = [
  { path: "/", Icon: NotesIcon },
  { path: "/favourites", Icon: Heart },
  { path: "/trash", Icon: Trash },
];

export default function MobileNavigation() {
  return (
    <div className="navigation-wrapper">
      <nav
        className={cn(
          "fixed bottom-0 left-0 w-full bg-main px-9 pb-4 z-[1]",
          "navigation-container"
        )}
      >
        <ul className="flex justify-between items-center">
          {navigationLinks.map(({ path, Icon }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  cn("p-3 inline-flex", {
                    "bg-tertiary rounded-[50%]": isActive,
                  })
                }
              >
                {({ isActive }) => (
                  <Icon className={isActive ? "w-8 h-8" : "w-7 h-7"} />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

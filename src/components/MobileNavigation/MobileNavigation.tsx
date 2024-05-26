import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import Heart from "@/assets/svgs/heart";
import NotesIcon from "@/assets/svgs/notes";
import Trash from "@/assets/svgs/trash";
import "./style.css";

type NavigationLinksProps = {
  path: string;
  icon: JSX.Element;
};

const navigationLinks: NavigationLinksProps[] = [
  { path: "/", icon: <NotesIcon /> },
  { path: "/heary", icon: <Heart /> },
  { path: "/trash", icon: <Trash /> },
];

export default function MobileNavigation() {
  return (
    <div className="navigation-wrapper">
      <nav
        className={cn(
          "fixed bottom-0 left-0 w-full bg-main px-9 pb-5 z-[1]",
          "navigation-container"
        )}
      >
        <ul className="flex justify-between items-center">
          {navigationLinks.map(({ path, icon }, index) => (
            <li key={index}>
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
      </nav>
    </div>
  );
}

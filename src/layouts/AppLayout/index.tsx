import { Outlet } from "react-router-dom";
import { useMobile } from "@/hooks/useMobile";
import DesktopNavigation from "@/components/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "@/components/MobileNavigation/MobileNavigation";

function AppLayout() {
  const isMobile = useMobile();

  return (
    <div className="bg-main h-screen md:flex">
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      <div className="px-4 py-10 md:px-10 md:flex-1 lg:px-20">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;

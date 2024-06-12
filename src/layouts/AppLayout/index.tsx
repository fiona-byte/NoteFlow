import { Outlet } from "react-router-dom";
import { useMobile } from "@/hooks/useMobile";
import DesktopSidebar from "@/components/DesktopSidebar/DesktopSidebar";
import MobileNavigation from "@/components/MobileNavigation/MobileNavigation";
import Header from "@/components/Header/Header";

function AppLayout() {
  const isMobile = useMobile();

  return (
    <div className="bg-main h-screen md:flex xl:max-w-7xl xl:mx-auto">
      {isMobile ? <MobileNavigation /> : <DesktopSidebar />}
      <div className="h-screen overflow-auto px-4 pt-8 pb-32 md:px-10 md:flex-1 lg:px-20 lg:py-10">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;

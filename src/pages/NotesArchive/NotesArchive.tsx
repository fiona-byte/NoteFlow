import { useMobile } from "@/hooks/useMobile";
import DesktopNavigation from "@/components/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "@/components/MobileNavigation/MobileNavigation";

function NotesArchive() {
  const isMobile = useMobile();

  return (
    <div className="bg-main h-screen">
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </div>
  );
}

export default NotesArchive;

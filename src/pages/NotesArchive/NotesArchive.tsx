import { useMobile } from "@/hooks/useMobile";
import DesktopNavigation from "@/components/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "@/components/MobileNavigation/MobileNavigation";
import Card from "@/components/Card/Card";

function NotesArchive() {
  const isMobile = useMobile();

  return (
    <div className="bg-main h-screen">
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      <div>
        <Card />
      </div>
    </div>
  );
}

export default NotesArchive;

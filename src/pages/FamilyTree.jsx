import Navbar from "../components/NavBar";

import FamilyTreeComponent from "../components/treeComponent";
import MobileTreeRedirect from "./MobileTreeRedirect";
import { useEffect, useState } from "react";
function TreeChart() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 920);
    checkWidth(); // initial check
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <>
      <Navbar />
      {isMobile ? <MobileTreeRedirect /> : <FamilyTreeComponent />};
    </>
  );
}
export default TreeChart;

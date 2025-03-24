import { Outlet, useLocation } from "react-router-dom";
import Header  from "./components/Header";
import Footer from "./components/Footer";
import StaticPin from "./components/StaticPin";
import StickyFooter from "./components/StickyFooter";

function App() {
  const {pathname} = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
     <Header/>
     <div className="flex-1"><Outlet/></div>
     <StaticPin />
     {!pathname.includes("dashboard")&& <Footer/>}
     {!pathname.includes("dashboard")&& <StickyFooter/>}
    </div>
  )
}

export default App

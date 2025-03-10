import { Outlet } from "react-router-dom";
import Header  from "./components/Header";
import Footer from "./components/Footer";
import StaticPin from "./components/StaticPin";

function App() {
  return (
    <div className="flex flex-col h-screen">
     <Header/>
     <div className="flex-1"><Outlet/></div>
     <StaticPin />
     <Footer/>
    </div>
  )
}

export default App

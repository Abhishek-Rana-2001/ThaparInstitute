import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="h-screen overflow-x-hidden">
     <Header/>
     <Outlet/>
    </div>
  )
}

export default App

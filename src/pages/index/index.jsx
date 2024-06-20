//
import { useState } from "react";

//Components
import NavBar from "../../components/navBar/NavBar";
import SideBar from "../../components/sideBar/SideBar";
import Dashboard from "../dashboard/Dashboard";
import Settings from "../settingsPage/Settings";
import Instructors from "../instructors/Instructors";

function Home(){
  const [menuState, setMenuState] = useState("dashboard");
 let currentPage
  switch (menuState) {
    case "dashboard": currentPage = <Dashboard/>
    break;

    case "settings": currentPage = <Settings />
    break;

    case "instructors": currentPage = <Instructors/>
      break;
    
    default:
      break;
  }
  return(
    <div className="flex flex-col h-screen">
      <NavBar/>
      <div className="flex flex-row h-screen">
        <SideBar setMenuState={setMenuState}/>
        {currentPage}
      </div>
    </div>
  )
}

export default Home;

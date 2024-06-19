import { useState } from "react";

function SideBar(){
  const [menuState, setMenuState] = useState();
  function changeDashboard (menu){
    setMenuState(menu)
  }
  return(
    <div className="h-fill w-1/6 bg-blue-900 flex flex-col">
      <ul className="text-white flex flex-col gap-10 pl-5 pt-10">
        <li onClick={()=>changeDashboard("dashboard")}>Dashboard</li>
        <li onClick={()=>changeDashboard("students")}>Students</li>
        <li onClick={()=>changeDashboard("instructors")}>Instructors</li>
        <li onClick={()=>changeDashboard("calendar")}>Calendar</li>
        <li onClick={()=>changeDashboard("settings")}>Setting</li>
      </ul>
      <p>Current Menu State = {menuState}</p>
    </div>
  )

}

export default SideBar;
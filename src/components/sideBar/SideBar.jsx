SideBar.propTypes = {
  setMenuState : String.isRequired
}

function SideBar({setMenuState}){

  function changeDashboard (menu){
    setMenuState(menu)
  }
  return(
    <div className="h-fill w-1/6 bg-blue-900 flex flex-col">
      <ul className="text-white flex flex-col pt-10">
        <li className="hover:bg-blue-300 p-5 pl-7" onClick={()=>changeDashboard("dashboard")}>Dashboard</li>
        <li className="hover:bg-blue-300 p-5 pl-7" onClick={()=>changeDashboard("students")}>Students</li>
        <li className="hover:bg-blue-300 p-5 pl-7" onClick={()=>changeDashboard("instructors")}>Instructors</li>
        <li className="hover:bg-blue-300 p-5 pl-7" onClick={()=>changeDashboard("calendar")}>Calendar</li>
        <li className="hover:bg-blue-300 p-5 pl-7" onClick={()=>changeDashboard("settings")}>Setting</li>
      </ul>
    </div>
  )

}

export default SideBar;
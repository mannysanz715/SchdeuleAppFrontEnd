import NavBar from "../../components/navBar/NavBar";
import SideBar from "../../components/sideBar/SideBar";

function Home(){
  return(
    <div className="flex flex-col h-screen">
      <NavBar/>
      <div className="flex flex-row h-screen">
        <SideBar/>
        <h2 className='text-blue-400 text-lg font-bold'>Welcome to Schedule App</h2>
      </div>
    </div>
  )
}

export default Home;

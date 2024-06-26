import DailyView from "./DailyView"

function MainCalendar(){
  return(
    <>
      <ul className="h-full flex gap-10 justify-around px-10 pl-20">
      <DailyView />
      
      </ul>
    </>
  )
}

export default MainCalendar;

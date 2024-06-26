import EventItem from "./EventItem"


let dailyStudents = [{
  id:1,
  name: 'Manny',
  startHour: 14,
  startMin: 30,
  endHour:16,
  endMin: 30,
},{
  id:2,
  name: 'Mariam',
  startHour: 17,
  startMin: 0,
  endHour:19,
  endMin: 0,}
  ]






function DailyView (){
  return(
    <>
      <h1>DailyView Component</h1>
      <ul className="flex flex-col">
      
      {dailyStudents.map((student)=> <EventItem key={student.id} student={student} />)}
      </ul>
    </>
  )
}









export default DailyView;
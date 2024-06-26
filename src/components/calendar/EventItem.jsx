function EventItem({student}){
  return(
    <div className="flex gap-5">
    <h1>{student.startHour}:{student.startMin}</h1>
     <h1>{student.name}</h1>
    </div>
  )
}

export default EventItem;
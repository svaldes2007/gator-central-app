import DisplayOneBlock from "./DisplayOneBlock";

function ScheduleDisplay({ eatThenMeet, userClasses, egSchedule }) {

  return (
    <div className="scheduleDisplay">

        {egSchedule.map((event) => (
            // <p key={event.name}>{event.name}</p>
            event.name.length === 1
                ? <DisplayOneBlock key={event.name} duration={60} title="class" />
                : <DisplayOneBlock key={event.name} duration={60} title="other" />
            
        ))}



    </div>
  );
}

export default ScheduleDisplay;
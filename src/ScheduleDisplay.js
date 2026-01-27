import DisplayOneBlock from "./DisplayOneBlock";

function ScheduleDisplay({ userClasses, egSchedule }) {

  function timeDifference(start, end) {

    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);

    // convert to minutes
    const startTotal = startH * 60 + startM;
    let endTotal = endH * 60 + endM;

    // if end < start, assume it’s past noon (PM)
    if (endTotal < startTotal) {
      endTotal += 12 * 60; // add 12 hours
    }

    return endTotal - startTotal;
  }


  return (
    <div className="scheduleDisplay">

      {egSchedule.map((event) => {
        let displayTitle = event.name;

        if (event.name.length === 1) {
          const matchingClass = userClasses.find(cls => cls[event.name]);
          if (matchingClass) {
            displayTitle = matchingClass[event.name]; // e.g., "Math"
          }
        }



        return (
          <DisplayOneBlock
            key={event.name}
            duration={timeDifference(event.start, event.end)}
            title={displayTitle}
            start={event.start}
            end={event.end}
          />
        );
      })}

    </div>
  );
}

export default ScheduleDisplay;
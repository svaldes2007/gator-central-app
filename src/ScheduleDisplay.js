import DisplayOneBlock from "./DisplayOneBlock";

function ScheduleDisplay({ userClasses, date, eatThenMeet }) {

  function schedule (date, eatThenMeet){
    const day = new Date(date).getDay();
    let schedge;
    if(day === 1){ //monday
      schedge = [
        { name: "Morning Meeting", start: "7:45", end: "8:00" },
        { name: "A", start: "8:10", end: "9:10" },
        { name: "B", start: "9:20", end: "10:20" },
        { name: "Advisory", start: "10:30", end: "10:55" },
        { name: "C", start: "11:05", end: "11:55" },
        ...(eatThenMeet 
          ? [
              {name: "Lunch", start: "11:55", end: "12:30"},
              { name: "D", start: "12:30", end: "1:30" }
            ]
          : [
              { name: "D", start: "12:05", end: "1:05" },
              { name: "Lunch", start: "1:05", end: "1:40" }
            ]
        ),
        { name: "E", start: "1:40", end: "2:40" } 
      ];
    } else if (day === 2){ //tuesday
      schedge = [
        { name: "Class Meeting", start: "7:45", end: "8:00" },
        { name: "A", start: "8:10", end: "9:10" },
        { name: "B", start: "9:20", end: "10:20" },
        { name: "Assembly", start: "10:30", end: "10:55" },
        { name: "C", start: "11:05", end: "11:55" },
        ...(eatThenMeet 
          ? [
              {name: "Lunch", start: "11:55", end: "12:30"},
              { name: "D", start: "12:30", end: "1:30" }
            ]
          : [
              { name: "D", start: "12:05", end: "1:05" },
              { name: "Lunch", start: "1:05", end: "1:40" }
            ]
        ),
        { name: "E", start: "1:40", end: "2:40" } 
      ];
    } else if (day === 3){ //wendsday
      schedge = [
        { name: "Advisory", start: "8:45", end: "9:00" },
        { name: "A", start: "9:10", end: "10:00" },
        { name: "B", start: "10:10", end: "11:00" },
        { name: "C", start: "11:10", end: "12:00" },
        ...(eatThenMeet 
          ? [
            { name: "Lunch", start: "12:00", end: "12:30" },  
            { name: "D", start: "12:30", end: "1:20" }
            ]
          : [
              {name: "D", start: "12:10", end: "1:00"},
              { name: "Lunch", start: "1:00", end: "1:30" }
            ]
        ),
        { name: "E", start: "1:30", end: "2:20" } 
      ];
    }  else if (day === 4){ //thursday
      schedge = [
        { name: "Advisory", start: "7:45", end: "8:00" },
        { name: "A", start: "8:10", end: "9:10" },
        { name: "B", start: "9:20", end: "10:20" },
        { name: "Assembly", start: "10:30", end: "10:55" },
        { name: "C", start: "11:05", end: "11:55" },
        ...(eatThenMeet 
          ? [
              {name: "Lunch", start: "11:55", end: "12:30"},
              { name: "D", start: "12:30", end: "1:30" }
            ]
          : [
              { name: "D", start: "12:05", end: "1:05" },
              { name: "Lunch", start: "1:05", end: "1:40" }
            ]
        ),
        { name: "E", start: "1:40", end: "2:40" } 
      ];
    } else if (day === 5){ //friday
      schedge = [
        { name: "Advisory Check In", start: "7:45", end: "8:00" },
        { name: "A", start: "8:10", end: "9:10" },
        { name: "B", start: "9:20", end: "10:20" },
        { name: "C", start: "10:30", end: "11:30" },
        ...(eatThenMeet 
          ? [
              { name: "Lunch", start: "11:30", end: "12:05" },
              { name: "D", start: "12:05", end: "1:05" }
            ]
          : [
              { name: "D", start: "11:40", end: "12:40"},
              { name: "Lunch", start: "12:40", end: "1:15" }
            ]
        ),
        { name: "E", start: "1:15", end: "2:15" } 
      ];
    } else {
      schedge = [
        { name: "Weekend!!!", start: " ", end: " " },
      ];
    }
    return schedge;
  }

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

      {schedule(date, eatThenMeet).map((event) => {
        let displayTitle = event.name;

        if (event.name.length === 1) {
          // const matchingClass = userClasses.find(cls => cls[event.name]);
          // if (matchingClass) {
          //   displayTitle = matchingClass[event.name]; // e.g., "Math"
          // }
        }

        return (
          <DisplayOneBlock
            key={event.name}
            duration={event.name === "Weekend!!!" ? 100 : timeDifference(event.start, event.end)}
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
import './App.css';
import TabButton from "./TabButton";
import {useState} from "react";
import logo from "./gatorLogo.jpg";
import ScheduleDisplay from "./ScheduleDisplay";

function App() {

  const [currentTab, setCurrentTab] = useState("schedule");
  const today = new Date();
  const eatThenMeet  = true;

  //figure out how to save datain between user opening app... but usestates for now 


  //users classes


  const userClasses = [
    {A: "English"}, 
    {B: "Math"}, 
    {C: "Art"}, 
    {D: "Spanish"},
    {E: "Free"},
    {F: "History"},
    {G: "Computer Science"}
  ];


  //eg schedule: (ill figure out how ot map it long term later)


  const egSchedule = [
    { name: "Morning Meeting", start: "7:45", end: "8:00" },
    { name: "A", start: "8:10", end: "9:10" },
    { name: "B", start: "9:20", end: "10:20" },
    { name: "Advisory", start: "10:30", end: "10:55" },
    { name: "C", start: "11:05", end: "11:55" },
    ...(eatThenMeet 
      ? [
          { name: "D", start: "12:05", end: "1:05" },
          { name: "Lunch", start: "1:05", end: "1:30" }
        ]
      : [
          {name: "Lunch", start: "11:55", end: "12:20"},
          { name: "D", start: "12:30", end: "1:30" }
        ]
    ),
    { name: "E", start: "1:40", end: "2:40" } 
  ];



  return (
    <div className="App">
      <div className="bar">
        <p className="barTitle">Gator Central</p>
        <img className="logo" src ={logo} alt="gator logo"/>
        <p className="dateTitle">{today.toDateString()}</p>
        <div className="tabs">
          <TabButton tab={currentTab} setTab={setCurrentTab} type="schedule" message="Schedule"/>
          <TabButton tab={currentTab} setTab={setCurrentTab} type="lunch" message="Lunch"/>
          <TabButton tab={currentTab} setTab={setCurrentTab} type="profile" message="Profile"/>
          <TabButton tab={currentTab} setTab={setCurrentTab} type="calendar" message="Calendar"/>
        </div>
        <div className="line"></div>

             
        {currentTab === "schedule" ? (
          <ScheduleDisplay
            userClasses={userClasses}
            egSchedule={egSchedule}
          />
        ) : currentTab === "lunch" ? (
          <p className="pageStandIn">lunch</p>
        ) : currentTab === "profile" ? (
          <p className="pageStandIn">profile</p>
        ) : currentTab === "calendar" ? (
          <p className="pageStandIn">calender</p>
        ) : (
          <p>ERROR</p>
        )}
      </div>
    </div>
  );
}

export default App;

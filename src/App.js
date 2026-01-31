import './App.css';
import TabButton from "./TabButton";
import {useState} from "react";
import logo from "./gatorLogo.jpg";
import ScheduleDisplay from "./ScheduleDisplay";

function App() {

  const [currentTab, setCurrentTab] = useState("schedule");
  const today = new Date();
  

  //figure out how to save datain between user opening app... but usestates for now 


  //users classes
  const eatThenMeet  = true;

  const userClasses = [
    {A: "English"}, 
    {B: "Math"}, 
    {C: "Art"}, 
    {D: "Spanish"},
    {E: "Free"},
    {F: "History"},
    {G: "Computer Science"}
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
            date={today}
            eatThenMeet={eatThenMeet}
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

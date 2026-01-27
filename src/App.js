import React from "react";
import PersistentInput from "./InputPage";
//import profilePicture from "/Users/pmarsh/Desktop/gator-central-app/profile_photo.webp";

function App() {
  return (
    <div style={{ padding: "10px", textAlign: "center" }}>

      <div>
        <img src="profile_photo.webp" alt="Profile Picture" width="70" height="70"/>
      </div>
    
      <span>Name: {<PersistentInput
        storageKey="username"
        placeholder="username"
        style={{ fontSize: "18px", width: "400px" }}
      />}</span>
      <br/><br/>

      <span>A: {<PersistentInput
        storageKey="block1"
        placeholder="block1"
        style={{ fontSize: "15px", width: "400px" }}
      />}</span>
      <br /><br />

      <span>B: {<PersistentInput
        storageKey="block2"
        placeholder="block2"
        style={{ fontSize: "15px", width: "400px" }}
      />}</span>
      <br /><br />

      <span>C: {<PersistentInput
        storageKey="block3"
        placeholder="block3"
        style={{ fontSize: "15px", width: "400px" }}
      />}</span>
      <br /><br />

      <span>D: {<PersistentInput
        storageKey="block4"
        placeholder="block4"
        style={{ fontSize: "15px", width: "400px" }}
      />}</span>
      <br /><br />

      <span>E: {<PersistentInput
        storageKey="block5"
        placeholder="block5"
        style={{ fontSize: "15px", width: "400px" }}
      />}</span>
      <br /><br />

      <span>F: {<PersistentInput
        storageKey="block6"
        placeholder="block6"
        style={{ fontSize: "15px", width: "400px" }}
      />}</span>
      <br /><br />

      <span>G: {<PersistentInput
        storageKey="block7"
        placeholder="block7"
        style={{ fontSize: "15px", width: "400px" }}
      />}</span>
      <br /><br />

      {/* Different colors
      <PersistentInput
        storageKey="styledInput"
        placeholder="Colored Input"
        style={{
          fontSize: "18px",
          color: "blue",
          border: "2px solid purple",
          backgroundColor: "#f0f0ff",
        }}
      /> */}
    </div>
  );
}

export default App;
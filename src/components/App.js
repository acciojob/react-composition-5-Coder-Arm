
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  const tabs = [[{id : 1 , title : 'Tab 1', content : 'Content for Tab 1'},{id : 2 , title : 'Tab 2', content : 'Content for Tab 2'},{id : 3 , title : 'Tab 3', content : 'Content for Tab 3'}],[{id : 4 , title : 'Tab A', content : 'Content for Tab A'},{id : 5 , title : 'Tab B', content : 'Content for Tab B'},{id : 6 , title : 'Tab C', content : 'Content for Tab C'}]]
  return (
    <div>
       <Tabs tabs={tabs}/>
    </div>
  )
}

export default App

import { useEffect, useState } from "react";
import Logs from './Logs';
// import LogsDetails from "./LogsDetails";
import LogForm from "./LogForm";

const App = () => {
const [logs, setLogs] = useState([]);
//this is state to toggle Logsdetails component and send id
const [toggleDetails, setToggleDetails] =useState({ show: false, id: null });
const [edit, setEdit] = useState({ show: false, id: null});

const [toggleForm, setToggleForm] = useState(false); // used by LogForm prop and hide/show button in app.jsx so need to stay here

useEffect(() => {
  fetch("http://localhost:3003/logs")
    .then((res) => res.json())
    .then((data) => setLogs(data.logs));
}, []);

  return (
    <div>
      <h1>Logs CRUD</h1>
      <Logs 
      setToggleDetails={setToggleDetails} logs={logs}
      setLogs={setLogs}
      />
      { toggleForm && <LogForm setLogs={setLogs} setToggleForm={setToggleForm}/> }
      {!toggleForm && <button onClick={() => setToggleForm(true)}>Add Log</button>}
      {/* {toggleDetails.show && 
      <LogsDetails toggleDetails={toggleDetails} />} */}
    </div>
  );
};

export default App;

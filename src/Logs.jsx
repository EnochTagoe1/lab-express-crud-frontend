
import { useEffect } from "react";

const Logs = ( { logs, setLogs, setToggleDetails }) => {
   useEffect (() => {
    fetch("http://localhost:3333/logs")
    .then((res) => res.json())
    .then((data) => setLogs(data.logs));
   }, []); 

   if(logs.length === 0) return null;

   return (
    <div>
        <h1>Logs</h1>
        {logs.map(({ id,
captainName,
title,
post,
mistakesWereMadeToday,
daysSinceLastCrisis })=> {
    <div key={id}>
        <h3>Captain Name: {captainName}</h3>
        <p>Title: {title}</p>
        <p>Post: {post}</p>
        <p>Mistakes Made Today: {mistakesWereMadeToday}</p>
        <p>Days Since Last Crisis: {daysSinceLastCrisis}</p>
        <button onClick={() => setToggleDetails({ show: true, id})}>
            Details
        </button>
        <hr />
        </div>
        })}
    </div>
    );
};

export default Logs;
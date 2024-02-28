import { useState, useEffect } from "react";


const LogForm = ({ setLogs, setToggleForm, }) => {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
      });
   

function handleChange(e) {
    setLog({ ...log, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log)
    };
    fetch('http://localhost:3333/logs/', options)
    .then((res) => res.json())
    .then((data)=> setLogs(data.logs)) // key is called logs in local storage
    .then(() => setToggleForm(false))
  }

  return (
    <section>
      <h2>Log Form:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">
          Captain Name:
          <input
            onChange={handleChange}
            type="text"
            id="captainName"
            name="captainName"
            value={log.captainName}
            required
          />
        </label>
        <label htmlFor="title">
          Title:
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            value={log.title}
            required
          />
        </label>
        <label htmlFor="post">
          Post:
          <textarea
            onChange={handleChange}
            id="post"
            name="post"
            value={log.post}
            required
          />
        </label>
        <label htmlFor="mistakesWereMadeToday">
          Mistakes Were Made Today:
          <input
            onChange={handleChange}
            type="checkbox"
            id="mistakesWereMadeToday"
            name="mistakesWereMadeToday"
            checked={log.mistakesWereMadeToday}
          />
        </label>
        <label htmlFor="daysSinceLastCrisis">
          Days Since Last Crisis:
          <input
            onChange={handleChange}
            type="number"
            id="daysSinceLastCrisis"
            name="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default LogForm
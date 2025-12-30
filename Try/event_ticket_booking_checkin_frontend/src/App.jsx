import { useEffect, useState } from "react";
import { apiFetch } from "./api";

export default function App() {
  const [events, setEvents] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const res = await apiFetch("/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    console.log("LOGIN RESPONSE:", res);

    if (res.ok) {
      localStorage.setItem("token", res.data.token);
      alert("login success");
    } else {
      alert(res.data.message);
    }
  }

  async function getEvents() {
    const res = await apiFetch("/events");

    console.log("EVENTS RESPONSE:", res);

    if (res.ok) {
      setEvents(res.data.data);
    }
  }

  async function book(eventId) {
    const res = await apiFetch("/book", {
      method: "POST",
      body: JSON.stringify({ event_id: eventId }),
    });

    console.log("BOOK RESPONSE:", res);

    alert(res.data.message);
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <input placeholder="email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>

      <hr />

      <h2>Events</h2>
      {events.map(event => (
        <div key={event.id} style={{ marginBottom: 10 }}>
          <b>{event.title}</b> - {event.location}
          <br />
          <button onClick={() => book(event.id)}>Book</button>
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";

function Chat() {
  const [to, setTo] = useState("ashish");
  const [message, setMessage] = useState("hey");
  function handleSubmit(e) {
    e.preventDefault();
    alert(`u said ${message} to ${to}`);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          To:{" "}
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="ashish">ashish</option>
            <option value="harshita">harshita</option>
            <option value="ANKITA">ANKITA</option>
          </select>
        </label>
        <textarea
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default Chat;

import { useState } from "react";

function App() {
  const [text, setText] = useState<string>('hehh');

  async function sendMessage() {
    const res = await fetch('http://localhost:3001/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    })
    const message = await res.json()
    console.log(message.message)
  }

  return (
    <>
      <main>
        <div>
          <h1>Client</h1>
          <div className="">
            <h3>Send a message</h3>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="button" onClick={sendMessage}>Send</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

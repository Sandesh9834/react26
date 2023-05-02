import { useState } from "react";

export function Article({ title, content }) {
  const [btn, setBtn] = useState(true);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setBtn(!btn)}>
        {btn ? "Know More!" : "Show Less!"}
      </button>
      <p style={{ display: btn ? "none" : "block" }}> {content} </p>
    </div>
  );
}

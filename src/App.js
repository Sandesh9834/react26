//Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.

import "./styles.css";
import { Article } from "./Article";
import { title, content } from "./data";

export default function App() {
  return (
    <div className="App">
      <Article title={title} content={content} />
    </div>
  );
}

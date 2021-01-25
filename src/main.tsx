import { h, render } from "preact";
import { useReactive } from "./hooks";
import "./style.css";

function App() {
    return <samp>hello, world!</samp>;
}

render(<App />, document.body);

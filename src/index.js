import React from "react";
import ReactDOM from "react-dom";
import FormTest from "./FormTest";
import "./styles.scss";

function App() {
	return (
		<div className="App">
			<FormTest />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

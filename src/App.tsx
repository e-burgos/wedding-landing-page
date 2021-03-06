import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import "./App.css";
import "./assets/styles/App.scss";
import MainRouting from "./components/MainRouting";

function App() {
	return (
		<Router>
			<MainRouting />
		</Router>
	);
}

export default App;

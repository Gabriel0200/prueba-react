import React from "react";
import ReactDOM from "react-dom/client";
import { TaskList } from "./components/TaskList";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<main className="container mx-auto">
			<TaskList />
		</main>
	</React.StrictMode>
);

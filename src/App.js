import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import RouterSystem from "./routes/routes";

function App() {
	return (
		<Router>
			<RouterSystem />
		</Router>
	);
}

export default App;

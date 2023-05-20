import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Base from "./pages/Base";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Button from "./Styles/components/Button";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Base />}>
						<Route index path="home" element={<Home />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard/" element={<Dashboard />}> 
						<Route index path="button" element={<Button/>} />
					</Route>

				</Routes>
			</Router>
		</>
	);
}

export default App;

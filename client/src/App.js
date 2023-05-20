import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Base from "./pages/Base";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/components/Profile";

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
						<Route path="profile" element={<Profile />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;

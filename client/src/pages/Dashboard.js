import React from "react";
import Theme from "./components/Theme";
import LeftCard from "./components/LeftCard";
import { Outlet } from "react-router-dom";

function Dashboard() {

	return (
		<>
			<Theme />
			<LeftCard visible="Y" />
			<Outlet/>
		</>
	);
}

export default Dashboard;

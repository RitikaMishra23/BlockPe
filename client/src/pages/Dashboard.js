import React from "react";
import Theme from "./components/Theme";
import LeftCard from "./components/LeftCard";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Dashboard() {
	return (
		<>
			<Theme />
			<LeftCard visible="Y" />
			<Header />
			<Outlet />
		</>
	);
}

export default Dashboard;

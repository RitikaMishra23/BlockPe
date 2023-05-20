import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquareVirus,
	faXmark,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../../Styles/components/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
	const [menubar, toggler] = useState(false);
	const displayMenu = useCallback(() => {
		menubar ? toggler(false) : toggler(true);
	}, [menubar]);
	return (
		<div className="wrapper">
			<header className="topnav">
				<NavLink className="logo" to="/">
					<FontAwesomeIcon
						icon={faSquareVirus}
						className="logo-icon"
					/>
					<span className="nav-title">BlockPe</span>
				</NavLink>
				<nav className={menubar ? `menu-bar` : `menu-bar hide-menu`}>
					<FontAwesomeIcon
						icon={faXmark}
						id="close-menu"
						onClick={displayMenu}
					/>
					<ul className="menu-list">
						<li className="menu-item">
							<a href="home" className="nav-link">
								Home
							</a>
						</li>
						{/* <li className="menu-item">
							<a href="about" className="nav-link">
								About Us
							</a>
						</li> */}
						<li className="menu-item">
							<a href="contact" className="nav-link">
								Contact
							</a>
						</li>
						<li className="menu-item">
							<a href="/login" className="nav-link">
								Login
							</a>
						</li>
						<li className="menu-item">
							<a href="/signup" className="nav-link">
								Sign Up
							</a>
						</li>
					</ul>
				</nav>
				<FontAwesomeIcon
					icon={faBars}
					className={
						menubar ? `menu-open` : `menu-open menu-bar-show`
					}
					id="show-menu"
					onClick={displayMenu}
				/>
			</header>
		</div>
	);
}

export default Navbar;

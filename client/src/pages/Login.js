import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Login.css";
import avatar from "../assets/undraw_female_avatar_efig.svg";
import img from "../assets/undraw_sign_up_n6im.svg";
import {
	faEye,
	faEyeSlash,
	faLock,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Login() {
	const [pwvis, stateChange] = useState(false);
	function changeFocus1() {
		let targs = document.getElementsByClassName("input-box");
		document.querySelector("#unph").hidden = false;
		targs[0].className = "input-box focus";
		if (document.querySelector("#password").value !== "")
			document.querySelector("#pwph").hidden = true;
		else targs[1].className = "input-box";
	}
	function changeFocus2() {
		let targs = document.getElementsByClassName("input-box");
		document.querySelector("#pwph").hidden = false;
		targs[1].className = "input-box focus";
		if (document.querySelector("#email").value !== "")
			document.querySelector("#unph").hidden = true;
		else targs[0].className = "input-box";
	}

    function checkValid() {
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        if(email === "" || password === "") {
            alert("Please fill all the fields");
        }
        else {
            alert("Login Successful");
            window.location.href = "/dashboard";
        }
    }
	return (
		<div className="bg">
			<div className="container">
				<div className="left-form">
					<div className="avatar">
						<img src={avatar} alt="avatar" className="avat-icon" />
					</div>
					<div className="head1">WELCOME</div>
					<div className="input-box">
						<div className="input-icon">
							<FontAwesomeIcon
								icon={faUser}
								className="icons un-icon"
							/>
						</div>
						<div
							className="input-text-wrap"
							onClick={changeFocus1}
							onFocus={changeFocus1}
						>
							<div className="placeholder" id="unph">
								Email
							</div>
							<input
								type="email"
								name="email"
								id="email"
								className="text-boxes"
							/>
						</div>
					</div>
					<div className="input-box">
						<div className="input-icon">
							<FontAwesomeIcon
								icon={faLock}
								className="icons pw-icon"
							/>
						</div>
						<div
							className="input-text-wrap"
							onClick={changeFocus2}
							onFocus={changeFocus2}
						>
							<div className="placeholder" id="pwph">
								password
							</div>
							<input
								type={pwvis ? "text" : "password"}
								name="password"
								id="password"
								className="text-boxes"
							/>
						</div>
						<div className="input-icon">
							<button className="see-pw">
								<FontAwesomeIcon
									icon={pwvis ? faEyeSlash : faEye}
									className="icons"
									id="pw-toggler"
									onClick={() => {
										stateChange(!pwvis);
									}}
								/>
							</button>
						</div>
					</div>
					<div className="alt-login">
						<a href="#">Forgot password?</a>
					</div>
					<button id="submit-but" onClick={checkValid}>LOGIN</button>
                    <div className="left-txt">
                        Do not have an account?
                        <a href="/signup"> Sign Up</a>
                    </div>
                    <div className="left-txt">
                        <a href="/home">Click here to go back</a>
                    </div>
				</div>
				<div className="right-img">
					<img src={img} alt="login-img" className="login-img" />
				</div>
			</div>

			{/* <script src="../js/myscript2.js"></script> */}
		</div>
	);
}

export default Login;

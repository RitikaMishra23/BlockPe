import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/components/LeftCard.css";
import {
	faBars,
	faBell,
	faCircleInfo,
	faClockRotateLeft,
	faGears,
	faMoneyCheckDollar,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

const user = {
	name: "Nitya Tiwari",
	WalletBal: "124",
	CurrType: "Eth",
	txn: [
		{ type: 1, to: "abc" }, //sent money
		{ type: 2, from: "def" },
	],
	pfp: "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc",
};

const buttonInfo = [
	{ icon: faUser, txt: "Profile" },
	{ icon: faMoneyCheckDollar, txt: "Wallet Balance" },
	{ icon: faClockRotateLeft, txt: "Transaction History" },
	{ icon: faBell, txt: "Notifications" },
	{ icon: faGears, txt: "Settings" },
	{ icon: faCircleInfo, txt: "Help" },
];

function LeftCard(props) {
	return (
		<>
			<div className={props.visible === "Y" ? "leftcard" : "leftcard hide-left-card"}>
				<div className="title">
					<FontAwesomeIcon icon={faBars} />
				</div>
				<div className="pfp-container">
					<img src={user.pfp} alt="pfp" className="pfp" />
				</div>
				<div className="user-name">{user.name}</div>
				<div className="log-out">
					<a href="logout" className="log-out-link">
						Log Out
					</a>
				</div>
				<div className="wallet">
					<div className="wallet-title">Wallet Balance</div>
					<span className="wallet-bal">{user.WalletBal}</span>
					<span className="wallet-curr">{user.CurrType}</span>

					<div className="add-money">
						<a href="deposit" className="topup-link">
							TopUp Balance
						</a>
					</div>
				</div>
				<div className="button-container">
					<button className="dsh-button">Send Money</button>
					<button className="dsh-button">Receive Money</button>
				</div>
				<div className="navigators">
					{buttonInfo.map((button) => (
						<div className="navigator">
							<div className="navigator-icon">
								<FontAwesomeIcon icon={button.icon} />
							</div>
							<div className="navigator-title">{button.txt}</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default LeftCard;

import React from "react";
import "../../Styles/components/AboutCard.css";
import benefits from "../../data/benefits";

function AboutCard() {
    
	return (
		<>
			<div className="AboutCard">
				<div className="AboutCard-title">Why BlockPe?</div>
				<div className="AboutCard-container">
					{benefits.map((benefit, index) => (
						<div className="About_card" key={index}>
							<div className="AboutCard-img">
                                <img src={benefit.img} alt="img" className="imgs"></img>
                            </div>
							<div className="AboutCard-item" key={index}>
								<div className="AboutCard-item-title">
									{benefit.heading}
								</div>
								<div className="AboutCard-item-desc">
									{benefit.description}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default AboutCard;

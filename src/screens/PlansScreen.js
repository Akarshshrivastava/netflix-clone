import React from "react";
import "./PlansScreen.css";
const PlansScreen = () => {
  return (
    <div className="plansScreen_plans">
      <div className="plansScreen_plan">
        <div className="plansScreen_info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button className="plansScreen_btn">Subscribe</button>
      </div>
      <div className="plansScreen_plan">
        <div className="plansScreen_info">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button className="plansScreen_btn">Subscribe</button>
      </div>
      <div className="plansScreen_plan">
        <div className="plansScreen_info">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>
        <button className="plansScreen_btn selected">Subscribed</button>
      </div>
    </div>
  );
};

export default PlansScreen;

import React from "react";

const Mobile = () => {
  return (
    <div className="container">
      <img
        className="background"
        src={process.env.PUBLIC_URL + "/images/chmury.webp"}
        alt=""
      />
      <img
        className="picture mobile"
        src={process.env.PUBLIC_URL + "/images/tlo_popup_mobile_koniec.webp"}
        alt=""
      />
    </div>
  );
};

export default Mobile;

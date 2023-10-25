import React from "react";

const Browser = () => {
  return (
    <div className="container">
      <img
        className="background"
        src={process.env.PUBLIC_URL + "/images/chmury.webp"}
        alt=""
      />
      <img
        className="picture"
        src={process.env.PUBLIC_URL + "/images/tlo_popup_browser_koniec.png"}
        alt=""
      />
    </div>
  );
};

export default Browser;

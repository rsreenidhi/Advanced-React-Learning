import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season)
  const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h2>
        {season === "winter" ? "Burr! It is chilly" : "Lets hit the beach"}
      </h2>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;

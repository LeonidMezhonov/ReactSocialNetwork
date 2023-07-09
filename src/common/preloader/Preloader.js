import React from "react";
import preloader from "../../Assets/loader/Spinner-1s-200px.svg";

let Preloader = (props) => {
  return (
    <div>
      <img
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        src={preloader}
        alt=""
      />
    </div>
  );
};

export default Preloader;

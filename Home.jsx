import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <img
        className="pic"
        src="https://img.freepik.com/free-vector/flat-shopping-center-twitch-background_23-2149330483.jpg?t=st=1723807910~exp=1723811510~hmac=1f9b740239f6315286881b885af18be438f941385e49eae112e10c0912ea05f7&w=996"
      />
      <div className="caption">
        <h5>From our store to your door,Bringing Joy</h5>
      </div>
      <div>
        <img
          className="map"
          src="https://img.freepik.com/free-vector/electronic-commerce-set_24877-50338.jpg?t=st=1723808788~exp=1723812388~hmac=11f76035313821649f0d7363740084962cd6f1024783f6276cd7d2c1b75af669&w=740"
          alt="image"
        />
      </div>
    </>
  );
};

export default Home;

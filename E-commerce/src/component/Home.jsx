import React from "react";
import video from "../Assist/market_01.mp4";
import "../style/homepage.css";
import ebay from "../Assist/ebay.jpg";
import clothes from "../Assist/clothes.jpg";
import jwellery from "../Assist/jwellery.jpg";
import shoes from "../Assist/shoes.jpg";
function Home() {
  return (
    <div>
      <div className="homePage">
        <section className="rightSide">
          <div className="align">
            <h2 className="heading">Market</h2>
            <span className="span">your Store Online</span>
            <p className="paragrapgh">
              Welcome to your site here you can purchase your dream products in
              cheap <span> &#8377;</span>
              rates Also you can sell your product with better prices . <br />
              Hlw my Name is Kartikey and I am here to connect you with your
              dream site.
            </p>
          </div>
        </section>
        <section className="leftSide">
          <video
            autoPlay
            muted
            loop
            playsInline
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.play()}
            width="600"
            height="567"
          >
            <source src={video} type="video/mp4" />
          </video>
        </section>
      </div>
      <center className="center">
        <div className="content">
          <div className="block">
            <img src={shoes} alt="" className="img" />
            <span className="offer">Flat 50% off</span>
          </div>
          <div className="block">
            <img src={jwellery} alt="" className="img" />
            <span className="offer">Flat 40% off</span>
          </div>
          <div className="block">
            <img src={clothes} alt="" className="img" />
            <span className="offer">Flat 90% off</span>
          </div>
        </div>
      </center>
      <div>
        <img
          src={ebay}
          alt="ebay"
          style={{ marginLeft: "36px", width: "95%" }}
        />
      </div>
    </div>
  );
}

export default Home;

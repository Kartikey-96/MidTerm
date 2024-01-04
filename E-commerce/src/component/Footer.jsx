import React from "react";
import "../style/footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="firstArt">
          <ul>
            <p>Contact-Us</p>
            <li>About Us</li>
            <li>Careers</li>
            <li>Shopy</li>
            <li>Stories</li>
            <li>Press</li>
            <li>Wholesale</li>
            <li>Cleartrip</li>
          </ul>
        </div>
        <div>
          <ul className="secondArt">
            <p>Help</p>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
            <li>Report Infringement</li>
          </ul>
        </div>
        <div>
          <ul className="thirdArt">
            <p>CONSUMER-POLICY</p>
            <li>Security</li>
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
          </ul>
        </div>
        <div>
          <ul className="fourthArt">
            <p>SOCIAL</p>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div className="sixArt">
          <ul>
            <p>Careers</p>
            <li>Shopy</li>
            <li>Stories</li>
            <li>Press</li>
            <li>Wholesale</li>
            <li>Cleartrip</li>
            <li>Information</li>
            <li>Corporate</li>
          </ul>
        </div>
      </div>
      <div className="gap">
        <div style={{ display: "inline-block" }}>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
            width="13"
            height="12"
          />
          <span>Seller</span>
        </div>
        <div></div>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
          alt="Advertise"
          width="14"
          height="14"
        ></img>
        <span>Advertise</span>

        <span class="pCGSTE"> © Shopy.com </span>
        <div>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
            alt="Gift Cards"
            width="13"
            height="13"
          />
          <span>Gift </span>
        </div>
        <div>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
            alt="Payment methods"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;

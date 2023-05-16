import React from "react";
import "./Footer.css";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Insta from "../assets/insta.png";

import Youtube from "../assets/youTube.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__left">
          <div className="support1">
            <div className="first">
              <span>Support</span>
            </div>
            <div className="support">
              <div className="support__left">
                <a className="support__a" href="#">
                  Contact us
                </a>
                <a className="support__a" href="#">
                  FAQ
                </a>
                <a className="support__a" href="#">
                  Check Gift Card balance
                </a>
                <a className="support__a" href="#">
                  Purchase a Gift Card
                </a>
                <a className="support__a" href="#">
                  Check Order
                </a>
                <a className="support__a" href="#">
                  Delivery
                </a>
                <a className="support__a" href="#">
                  Find a Store
                </a>
                <a className="support__a" href="#">
                  Size Guide
                </a>
              </div>
              <div className="support__left">
                <a className="support__a" href="#">
                  Return Policy
                </a>
                <a className="support__a" href="#">
                  Privacy Policy
                </a>
                <a className="support__a" href="#">
                  Terms & Conditions
                </a>
                <a className="support__a" href="#">
                  Right of Withdrawal
                </a>
                <a className="support__a" href="#">
                  *Promotions & Sale
                </a>
                <a className="support__a" href="#">
                  Student Discount
                </a>
                <a className="support__a" href="#">
                  Refer A Friend
                </a>
                <a className="support__a" href="#">
                  Become an Affiliate Partner
                </a>
              </div>
            </div>
          </div>
          <div className="about1">
            <div className="first">
              <span>About Us</span>
            </div>
            <div className="about__puma">
              <div className="about__puma__right">
                <a className="support__a" href="">
                  Company
                </a>
                <a className="support__a" href="">
                  Corporate News
                </a>
                <a className="support__a" href="">
                  Press Center
                </a>
              </div>
              <div className="about__puma__right">
                <a className="support__a" href="">
                  Investors
                </a>
                <a className="support__a" href="">
                  Sustainability
                </a>
                <a className="support__a" href="">
                  Careers
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="right1">
            <span>Sign up and get 20% off your first order</span>
            <button className="btn1">Sign up for newsletter</button>
          </div>
          <div className="right2">
            <div className="first">
              <span>More Inspiration</span>
            </div>
            <div className="icons">
              <a href="">
                <img src={Facebook} alt="" />
              </a>
              <a href="">
                <img src={Twitter} alt="" />
              </a>
              <a href="">
                <img src={Insta} alt="" />
              </a>

              <a href="">
                <img src={Youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="option">
          <select name="" id="selected2">
            <option value="Кыргызский">Кыргызский</option>
            <option value="Русский">Русский</option>
            <option value="English">English</option>
          </select>
        </div>
        <div className="span">
          <span>© AD Kyrgyzstan GmbH, 2023. All Rights Reserved</span>
        </div>
        <div className="span2">
          <span>Cookies Settings</span>
          <span id="span2">Imprint & Legal Data</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

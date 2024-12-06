import "./FooterStyles.css";
import downArrow from "../../images/arrow-down.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import youtube from "../../images/youtube.png";
import linkedin from "../../images/linkedin.png";
import world from "../../images/world.png";
import bangladesh from "../../images/bangladesh.png";
import top from "../../images/top.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="flex justify-between items-center">
        <div className="logo">Plantify</div>
        <div className="region-language">
          <div className="region">
            <img className="flag" src={bangladesh} alt="" />
            <p>Bangladesh</p>
            <img className="dropDown" src={downArrow} alt="" />
          </div>
          <div className="language">
            <img className="flag" src={world} alt="" />
            <p>English</p>
            <img className="dropDown" src={downArrow} alt="" />
          </div>
        </div>
      </div>
      <div className="our-informations">
        <div className="our-info">
          <h3>About Plantify</h3>
          <a href="#">Who we are</a>
          <a href="#">Blog</a>
          <a href="#">Work with us</a>
          <a href="#">Investor Relations</a>
          <a href="#">Report Fraud</a>
          <a href="#">Contact us</a>
        </div>
        <div className="our-info">
          <h3>For Nurseries</h3>
          <a href="#">Partner with us</a>
          <a href="#">Apps for you</a>
        </div>
        <div className="our-info">
          <h3>Learn more</h3>
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Terms</a>
        </div>
        <div className="our-info">
          <h3>Social Links</h3>
          <div className="flex gap-2 mt-2">
            <a href="">
              <img className="social-media-links" src={linkedin} alt="" />
            </a>
            <a href="">
              <img className="social-media-links" src={facebook} alt="" />
            </a>
            <a href="">
              <img className="social-media-links" src={instagram} alt="" />
            </a>
            <a href="">
              <img className="social-media-links" src={youtube} alt="" />
            </a>
            <a href="">
              <img className="social-media-links" src={twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="horizontal-divider"></div>
    <div className="copyright">
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Plantify Ltd. All rights reserved.</p>
    </div>
    <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="top" src={top} alt="" />
    </div>
  );
}

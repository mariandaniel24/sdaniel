import { SITE_NAME, FACEBOOK_URL, GITHUB_URL } from "../lib/constants";
const Footer = () => {
  return (
    <footer className="footer footer-bg">
      <div className="footer-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3 text-center">
              <p className="footer-text">My social media</p>
              <ul className="social-list">
                <li>
                  <a href={GITHUB_URL}>
                    <i className="fa fa-github" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={FACEBOOK_URL}>
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright-box">
            <p className="footer-text">© 2019 {SITE_NAME} | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

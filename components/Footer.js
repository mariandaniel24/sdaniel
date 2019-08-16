const Footer = () => {
  return (
    <footer className="footer footer-bg">
      <div className="footer-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3 text-center">
              <p className="footer-text">@lang('social_media')</p>
              <ul className="social-list">
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-github" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright-box">
            <p className="footer-text">@lang('footer.copyright')</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
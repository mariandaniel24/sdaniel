const Footer = () => {
  return (
    <footer class="footer footer-bg">
      <div class="footer-box">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3 text-center">
              <p class="footer-text">@lang('social_media')</p>
              <ul class="social-list">
                <li>
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-github" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="copyright-box">
            <p class="footer-text">@lang('footer.copyright')</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
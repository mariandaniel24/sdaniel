const Contact = () => {
  return (
    <section id="contact" className="section ">
      <div className="contact-box">
        <div className="section-heading">
          <h2 className="page-title contact-title text-center">@lang('contact.contact_title')</h2>
        </div>
        <p />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <form id="contact-form" method="POST">
                <div className="row justify-content-center">
                  <div className="col-sm-5 col-md-6 footer-bg">
                    <div className="form-group">
                      <label for="contact-name">@lang('contact.name')</label>
                      <input required minlength="3" type="text" className="text-input shadow-2" name="name" id="contact-name" value="" />
                      <span className="input-line" />
                    </div>
                  </div>
                  <div className="col-sm-5 col-md-6 footer-bg">
                    <div className="form-group">
                      <label for="contact-email">@lang('contact.email')</label>
                      <input required minlength="3" type="email" className="text-input shadow-2" name="email" id="contact-email" value="" />
                      <span className="input-line" />
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-12 footer-bg">
                    <div className="form-group">
                      <label for="contact-message">@lang('contact.message')</label>
                      <textarea required minlength="10" spellcheck="false" rows="7" className="text-input shadow-2" name="message" id="contact-message" />
                      <span className="input-line" />
                    </div>
                    <div className="form-group">
                      <button className="primary" id="contact-submit">
                        @lang('contact.send_message')
                        <span id="contact-loading-box" className="hide">
                          <svg className="contact-loading-icon" width="100%" height="100%" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                            <circle className="path" fill="none" stroke-width="6" strokeLinecap="round" cx="33" cy="33" r="30" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
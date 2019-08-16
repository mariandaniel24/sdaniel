const About = () => {
  return (
    <section id="about" className="section">
      <div className="container standard">
        <div className="section-heading">
          <h2 className="page-title text-center">@lang('about.about_title')</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="section-about-image">
              <img src="http://mixtheme.com/mixtheme/pikxal/images/about-me.png" className="img-responsive shadow-1" alt="" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="section-about">
              <p className="about-hi">@lang('about.hi')</p>
              <br />
              <br />
              <br />
              <p className="about-hi">@lang('about.first_paragraph')</p>
              <p className="about-info">@lang('about.second_paragraph')</p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

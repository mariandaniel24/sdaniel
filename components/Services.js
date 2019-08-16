import Siema from "siema";

const TABS_DELAY = 4000;

class Services extends React.Component {
  state = {
    progreessBar: "reset",
    currentIndex: 0,
    isPaused: false
  };

  componentWillUnmount = () => {
    clearInterval(this.sliderTimer);
  };

  componentDidMount = () => {
    this.slider = new Siema({
      selector: ".siema-slider",
      duration: 400,
      // easing: "ease",
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      rtl: false,
      onInit: () => {},
      onChange: this.setCurrentActiveTab
    });

    document.querySelector(".siema-slider").addEventListener("mouseover", this.stopTimer);
    document.querySelector(".siema-slider").addEventListener("mouseout", this.startTimer);
    
    document.querySelector(".services-box").addEventListener("mouseover", this.stopTimer);
    document.querySelector(".services-box").addEventListener("mouseout", this.startTimer);
    
    this.sliderTimer = setInterval(() => {
      if (!this.state.isPaused) {
        this.slider.next(1);
      }
    }, TABS_DELAY);
  };

  setCurrentActiveTab = () => {
    this.setState({currentIndex: this.slider.currentSlide})
  }

  stopTimer = () => {
    this.setState({ isPaused: true });
  };

  startTimer = () => {
    this.setState({ isPaused: false });
  };

  changeTab = e => {
    const tabIndex = e.target.dataset.tabIndex;
    console.log(tabIndex);
    this.slider.goTo(tabIndex);
  };

  render() {
    let progressBarCss = {};
    if (this.state.progressBar === "start") {
      (progressBarCss.width = "100%"), (progressBarCss.transition = "width 5000ms");
    } else {
      (progressBarCss.width = "0"), (progressBarCss.transition = "width 0ms");
    }

    return (
      <section id="services" className="section ">
        <div className="container standard">
          <div className="section-heading">
            <h2 className="page-title text-center">My services</h2>
          </div>
          {/* {{--
	<div className="services-container-all shadow-6"> --}} */}
          <SliderButtons changeTab={this.changeTab} currentIndex={this.state.currentIndex} />

          <div className="siema-slider">
            <div id="tab0" className="tab-section">
              <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-5 col-md-6 col-lg-4 ">
                  <h4 className="services-title">Responsive Design</h4>
                  <br />
                  <div className="services-info-box">
                    <p>Successful sites remain accessible to <strong>all</strong> users.</p>
                    <p>My job is to make websites with full support for every type of device.</p>
                    <p>To put it simply, your website should be beautiful, thoughtfully laid out for every device.</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                  <img src="/static/img/services/responsive-design.png" alt="Graphical representation of responsive web design." className="img-responsive" />
                </div>
              </div>
            </div>

            <div id="tab1" className="tab-section">
              <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                  <img src="/static/img/services/ui-ux.png" alt="Examples of good UI and UX design." className="img-responsive" />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4 ">
                  <h4 className="services-title">UX & UI</h4>
                  <br />
                  <div className="services-info-box">
                    <p>In order to design the website effectively, I will consider all aspects of the user experience.</p>
                    <ul>
                      <li>
                        <p>Who are the site’s target customers, and what is the goal of the website?</p>
                      </li>
                      <li>
                        <p>What is the “user workflow” expected for the website?</p>
                      </li>
                      <li>
                        <p>How can text and images be used to communicate clearly and create a specific experience?</p>
                      </li>
                      <li>
                        <p>How can audio and animation be used to support to message and enhance the experience?</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="tab2" className="tab-section tab-active">
              <div className="row justify-content-center">
                <div className="col-xs-12 col-md-6 col-lg-4 ">
                  <h4 className="services-title">Development</h4>
                  <br />
                  <div className="services-info-box">
                    <p>Besides a good design, a site must be functional, interactive, and secure.</p>
                    <p>I use back-end languages to create or contribute to web applications with clean, portable, well-documented code. But before writing that code, I make sure to collaborate with the client, in order to understand their particular needs, then translate those into technical requirements and come up with the most effective and efficient solution for architecting the technology.</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <img src="/static/img/services/development.jpg" alt="Graphical example of development" className="img-responsive" />
                </div>
              </div>
            </div>

            <div id="tab3" className="tab-section">
              <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                  <img src="/static/img/services/seo.png" alt="Graphical representation of visitor growth of a website - SEO (Search Engine Optimisation)." className="img-responsive" />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4 ">
                  <h4 className="services-title">Search Engine Optimization</h4>
                  <br />
                  <p>It's not enough to have a great website if you don't have visitors. My SEO services help businesses grow organic traffic to their websites by improving their performance in search engines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const SliderButtons = ({ currentIndex, changeTab }) => {
  return (
    <div className="row justify-content-center services-box unselectable">
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 ">
        <div className={"service-list-item " + (currentIndex === 0 ? "tab-button-active" : "")}>
          <a className="service-tab" data-tab-index="0" onClick={changeTab}>
            RESPONSIVE DESIGN
            <i className="fa fa-paint-brush" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 ">
        <div className={"service-list-item " + (currentIndex === 1 ? "tab-button-active" : "")}>
          <a className="service-tab" data-tab-index="1" onClick={changeTab}>
            UX & UI
            <i className="fa fa-paint-brush" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 ">
        <div className={"service-list-item " + (currentIndex === 2 ? "tab-button-active" : "")}>
          <a className="service-tab" data-tab-index="2" onClick={changeTab}>
            DEVELOPMENT
            <i className="fa fa-database" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 ">
        <div className={"service-list-item " + (currentIndex === 3 ? "tab-button-active" : "")}>
          <a className="service-tab active-tab" data-tab-index="3" onClick={changeTab}>
            SEO
            <i className="fa fa-line-chart" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

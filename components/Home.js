class Home extends React.Component {
  componentDidMount = () => {
    const app = document.getElementById("title-rotate");
    const typewriter = new Typewriter(app, { loop: true });
    typewriter
      .typeString("websites.")
      .pauseFor(2000)
      .deleteChars(6)
      .typeString(" applications.")
      .pauseFor(2000)
      .deleteAll()
      .typeString("user interfaces.")
      .pauseFor(2000)
      .deleteAll()
      .start();
  };
  

  render() {
    return (
      <section id="home" className="section ">
        <header className="header-standard">
          <div id="logo-header" className="logo">
            <p>Daniel.</p>
          </div>

{/* Language */}
          {/* <div id="lang-header" className="language-box">
            <button type="button" className="language-button">
              @lang('navbar.language_title')
              <i className="fa fa-chevron-down" aria-hidden="true" />
            </button>
            <div className="language-dropdown-list">
              <a href="@lang('navbar.other.language_link')">
                <img className="img-responsive" src="@lang('navbar.other.language_icon')" alt="" />
                @lang('navbar.other.language')
              </a>
            </div>
          </div> */}

          <div className="hamburger hamburger--elastic js-hamburger">
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
          <div className="title-box">
            <h1 className="title web unselectable">
            Hi, I'm Daniel.  {" "}
              <span className="design">I design & develop</span>
              <span id="title-rotate" className="web" />
            </h1>
            <a href="#" target="_blank" className="round-button btn-transparent lg">
            Resume
            </a>
          </div>
          <div className="learn-more-box">
            <a data-nav="true" onClick={this.props.scrollToPage} name="#services" className="not-navbar">
              Click to discover more
              <i className="fa fa-chevron-down" aria-hidden="true" />
            </a>
          </div>
        </header>
      </section>
    );
  }
}

export default Home;

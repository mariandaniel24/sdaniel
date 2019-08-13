class Home extends React.Component {
  componentDidMount = () => {
    const app = document.getElementById("title-rotate");
    const typewriter = new Typewriter(app, { loop: true });
    typewriter
      .typeString("landing pages.")
      .pauseFor(2000)
      .deleteAll()
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
      <section id="home" class="section ">
        <header class="header-standard">
          <div id="logo-header" class="logo">
            <p>Daniel.</p>
          </div>

          <div id="lang-header" class="language-box">
            <button type="button" class="language-button">
              @lang('navbar.language_title')
              <i class="fa fa-chevron-down" aria-hidden="true" />
            </button>
            <div class="language-dropdown-list">
              <a href="@lang('navbar.other.language_link')">
                <img class="img-responsive" src="@lang('navbar.other.language_icon')" alt="" />
                @lang('navbar.other.language')
              </a>
            </div>
          </div>

          <div class="hamburger hamburger--elastic js-hamburger">
            <div class="hamburger-box">
              <div class="hamburger-inner" />
            </div>
          </div>
          <div class="title-box">
            <h1 class="title web unselectable">
              @lang('navbar.hi_title')
              <span class="design">@lang('navbar.design_title')</span>
              <span id="title-rotate" class="web" />
            </h1>
            <a href="#" target="_blank" class="round-button btn-transparent lg">
              @lang('navbar.cv')
            </a>
          </div>
          <div class="learn-more-box">
            <a data-nav="true" href="#services" class="not-navbar">
              @lang('navbar.scroll_down')
              <i class="fa fa-chevron-down" aria-hidden="true" />
            </a>
          </div>
        </header>
      </section>
    );
  }
}

export default Home;

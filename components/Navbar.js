const Navbar = () => {
  return (
    <nav class="nav-box unselectable desktop">
      <div class="container nav">
        <div id="logo-navbar" class="logo">
          <p>Daniel.</p>
        </div>
        <div id="lang-navbar" class="language-box">
          <button type="button" class="language-button">
            @lang('navbar.language_title')
            <i class="fa fa-chevron-down" aria-hidden="true" />
          </button>
          <div class="language-dropdown-list">
            <a href="@lang('navbar.current.language_link')">
              <img class="img-responsive" src="@lang('navbar.current.language_icon')" alt="" />
              @lang('navbar.current.language')
            </a>

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
        <ul id="menu">
          <li>
            <a data-nav="true" class="white active" href="#home">
              @lang('navbar.title.home')
            </a>
          </li>
          <li>
            <a data-nav="true" class="white" href="#services">
              @lang('navbar.title.services')
            </a>
          </li>
          <li>
            <a data-nav="true" class="white" href="#portfolio">
              @lang('navbar.title.portfolio')
            </a>
          </li>
          <li>
            <a data-nav="true" class="white" href="#about">
              @lang('navbar.title.about')
            </a>
          </li>
          <li>
            <a data-nav="true" class="white" href="#contact">
              @lang('navbar.title.contact')
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
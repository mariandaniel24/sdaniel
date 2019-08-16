import Link from "next/link";
const navLinks = [
  { name: "Home", href: "#home", value: "home" },
  { name: "Services", href: "#services", value: "services" },
  { name: "Portfolio", href: "#portfolio", value: "portfolio" },
  { name: "About", href: "#about", value: "about" },
  { name: "Contact", href: "#contact", value: "contact" }
];

class Navbar extends React.Component {
  state = {
    isScrolled: false,
    currentActivePage: "home",

    first: false
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleNavbarColor);
    window.addEventListener("resize", this.handleNavbarColor);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", () => {});
    window.removeEventListener("resize", () => {});
  };

  handleNavbarColor = e => {
    const windowHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
    const navHeight = document.querySelector("nav.nav-box").scrollHeight;
    const isDesktop = this.getPageWidth() > 768;

    const isScrolled = navHeight - 16 <= scrollPos && isDesktop;

    this.setState({ isScrolled });

    this.handleActivePage(windowHeight, scrollPos);
  };

  getPageWidth = () => {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  };

  handleActivePage = (windowHeight, scrollPos) => {};

  render() {
    const navBoxClassNames = this.state.isScrolled ? "active shadow-6" : "";
    const navLinkClassNames = this.state.isScrolled ? "" : "white";
    const logoClassNames = this.state.isScrolled ? "logo-active" : "";
    // const languageClassNames = this.state.isScrolled ? "lang-active" : "";

    return (
      <nav className={"nav-box unselectable desktop " + navBoxClassNames}>
        <div className="container nav">
          <div id="logo-navbar" className="logo">
            <p className={logoClassNames}>Daniel.</p>
          </div>
          {/* Languages */}
          {/* <div id="lang-navbar" className="language-box">
          <button type="button" className="language-button">
            @lang('navbar.language_title')
            <i className="fa fa-chevron-down" aria-hidden="true" />
          </button>
          <div className="language-dropdown-list">
            <a href="@lang('navbar.current.language_link')">
              <img className="img-responsive" src="@lang('navbar.current.language_icon')" alt="" />
              @lang('navbar.current.language')
            </a>

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

          <ul id="menu">
            {navLinks.map(navLink => {
              const isLinkActive = this.state.currentActivePage === navLink.value;
              return (
                <li>
                  <a
                    data-nav="true"
                    className={`${navLinkClassNames}`}
                    onClick={this.props.scrollToPage}
                    name={navLink.href}
                  >
                    {navLink.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

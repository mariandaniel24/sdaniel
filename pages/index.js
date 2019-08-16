import React from "react";
import Head from "next/head";

// custom
import Navbar from "./../components/Navbar";
import Home from "../components/Home";
import Services from "../components/Services";
import Portfolio from "./../components/Portfolio/Portfolio";
import Statistics from "./../components/Statistics";
import About from "./../components/About";
import Contact from "./../components/Contact";
import Footer from "./../components/Footer";

class Index extends React.Component {
  scrollToPage = e => {
    document.querySelector(e.target.name).scrollIntoView({
      behavior: "smooth"
    });
  };
  render() {
    return (
      <>
        <Head>
          <title>@lang('meta.title')</title>
        </Head>
        <div id="wrapper">
          <Navbar scrollToPage={this.scrollToPage}/>

          <div id="page">
            <Home scrollToPage={this.scrollToPage}/>
            <Services />
            <Portfolio />
            <Statistics />
            <About />
            <Contact />
            <Footer />
          </div>
          {/* <!-- Loading section --> */}
          {/* loading fade effect */}
          {/* <div id="loading-box">
            <div className="loader">
              <svg className="loading" width="96px" height="96px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="path" fill="none" stroke-width="6" strokeLinecap="round" cx="33" cy="33" r="30" />
              </svg>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default Index;

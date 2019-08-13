import React from "react";
import Head from "next/head";

// custom
import Navbar from "./../components/Navbar";
import Home from "../components/Home";
import Services from "../components/Services";
import Portfolio from "./../components/Portfolio";
import Statistics from "./../components/Statistics";
import About from "./../components/About";
import Contact from "./../components/Contact";
import Footer from "./../components/Footer";

const Index = () => (
  <>
    <Head>
      <title>@lang('meta.title')</title>
    </Head>
    <div id="wrapper">
      <Navbar />
      <div id="page">
        <Home />
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
          <div class="loader">
            <svg class="loading" width="96px" height="96px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
              <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30" />
            </svg>
          </div>
        </div> */}

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animateCSS/1.2.2/jquery.animatecss.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.3.6/scrollreveal.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.5.1/js/iziModal.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.2.0/js/iziToast.min.js" />
      <script src="/js/app.js" />
    </div>
  </>
);

export default Index;

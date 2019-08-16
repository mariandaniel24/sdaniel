const About = () => {
  return (
    <section id="about" className="section">
      <div className="container standard">
        <div className="section-heading">
          <h2 className="page-title text-center">About me</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="section-about-image">
              {/* <img src="https://miro.medium.com/max/1200/1*0FqDC0_r1f5xFz3IywLYRA.jpeg" className="img-responsive shadow-1" /> */}
              <img src="/static/img/about.png" className="img-responsive shadow-1" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="section-about">
              {/* <p className="about-hi">Hi !</p> */}
              <p className="about-hi">My name is Daniel ! </p>
              <br />
              <p className="about-info"> 
                I enjoy programming, and I really like doing it ever since I started it as hobby. I'm a self-taught developer, my
                knowledge is the result of a lot of practice. 
                <br/>
                Coding is something that I really enjoy, I always like to try new things, even if it's challenging, I enjoy doing it. I always go for the fastest and most effective ways to do my projects. Even if it
                takes a lot of time, it's worth it, I dedicate a lot of time to the projects I develop, if the client is happy with the end product, so am I.
              </p>
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

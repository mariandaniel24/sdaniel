import ProjectModal from "./ProjectModal";

const projectsList = [
  {
    id: 0,
    title: "title0",
    short_description: "Lorem ipsum dolor sit amet.",
    website: "https://example.com",
    thumbnail_image: "http://lorempixel.com/400/400/",
    images: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    long_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A inventore minima obcaecati facere enim, autem nihil, veniam ratione eius magni dolor odio, sapiente beatae iusto in quia dolore voluptas fugiat."
  },
  {
    id: 1,
    title: "title1",
    short_description: "Lorem ipsum dolor sit amet.",
    website: "https://example.com",
    thumbnail_image: "http://lorempixel.com/400/400/",
    images: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    long_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A inventore minima obcaecati facere enim, autem nihil, veniam ratione eius magni dolor odio, sapiente beatae iusto in quia dolore voluptas fugiat."
  },
  {
    id: 2,
    title: "title2",
    short_description: "Lorem ipsum dolor sit amet.",
    website: "https://example.com",
    thumbnail_image: "http://lorempixel.com/400/400/",
    images: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    long_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A inventore minima obcaecati facere enim, autem nihil, veniam ratione eius magni dolor odio, sapiente beatae iusto in quia dolore voluptas fugiat."
  },
  {
    id: 3,
    title: "title3",
    short_description: "Lorem ipsum dolor sit amet.",
    website: "https://example.com",
    thumbnail_image: "http://lorempixel.com/400/400/",
    images: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    long_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A inventore minima obcaecati facere enim, autem nihil, veniam ratione eius magni dolor odio, sapiente beatae iusto in quia dolore voluptas fugiat."
  },
  {
    id: 4,
    title: "title4",
    short_description: "Lorem ipsum dolor sit amet.",
    website: "https://example.com",
    thumbnail_image: "http://lorempixel.com/400/400/",
    images: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    long_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A inventore minima obcaecati facere enim, autem nihil, veniam ratione eius magni dolor odio, sapiente beatae iusto in quia dolore voluptas fugiat."
  },
  {
    id: 5,
    title: "title5",
    short_description: "Lorem ipsum dolor sit amet.",
    website: "https://example.com",
    thumbnail_image: "http://lorempixel.com/400/400/",
    images: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    long_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A inventore minima obcaecati facere enim, autem nihil, veniam ratione eius magni dolor odio, sapiente beatae iusto in quia dolore voluptas fugiat."
  },
  {
    id: 6,
    title: "title6",
    short_description: "Lorem ipsum dolor sit amet.",
    website: "https://example.com",
    thumbnail_image: "http://lorempixel.com/400/400/",
    images: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    long_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A inventore minima obcaecati facere enim, autem nihil, veniam ratione eius magni dolor odio, sapiente beatae iusto in quia dolore voluptas fugiat."
  },
  {
    id: 7,
    title: "title7",
    short_description: "Lorem ipsum dolor sit amet.",
    website: "https://example.com",
    thumbnail_image: "http://lorempixel.com/400/400/",
    images: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    long_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A inventore minima obcaecati facere enim, autem nihil, veniam ratione eius magni dolor odio, sapiente beatae iusto in quia dolore voluptas fugiat."
  },
  {
    id: 8,
    title: "title8",
    short_description: "Lorem ipsum dolor sit amet.",
    website: "https://example.com",
    thumbnail_image: "http://lorempixel.com/400/400/",
    images: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    long_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A inventore minima obcaecati facere enim, autem nihil, veniam ratione eius magni dolor odio, sapiente beatae iusto in quia dolore voluptas fugiat."
  },
  {
    id: 7,
    title: "title9",
    short_description: "Lorem ipsum dolor sit amet.",
    website: "https://example.com",
    thumbnail_image: "http://lorempixel.com/400/400/",
    images: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    long_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A inventore minima obcaecati facere enim, autem nihil, veniam ratione eius magni dolor odio, sapiente beatae iusto in quia dolore voluptas fugiat."
  },
  {
    id: 7,
    title: "title10",
    short_description: "Lorem ipsum dolor sit amet.",
    website: "https://example.com",
    thumbnail_image: "http://lorempixel.com/400/400/",
    images: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    long_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A inventore minima obcaecati facere enim, autem nihil, veniam ratione eius magni dolor odio, sapiente beatae iusto in quia dolore voluptas fugiat."
  }
];

class Portfolio extends React.Component {
  state = {
    currentActiveProject: 0
  }
  render() {
    return (
      <section id="portfolio" className="section ">
        <div className="portfolio-box">
          <div className="container-fluid standard">
            <div className="section-heading">
              <h2 className="page-title text-center">My projects</h2>
            </div>
            <p className="text-center">@lang('portfolio.description')</p>
            <br />
            <br />
            <br />
            <div className="projects-container">
              {/* @foreach($portfolio_data as $project) */}
              {projectsList.map((project, i) => {
                return (
                  <div data-izimodal-open={`#body-modal-${project.id}`} id={`button-modal-${project.id}`} className="project">
                    <div className="project-box shadow-1">
                      <div className="project-heading shadow-6">
                        <h4>{project.title} </h4>
                        <hr />
                        <p> {project.short_description} </p>
                      </div>
                      <div className="project-content">
                        <img
                          src={project.thumbnail_image}
                          className="img-responsive project-thumbnail"
                          alt={`Preview image for the ${project.website} project.`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              <ProjectModal isModalActive={ true} project={projectsList[this.state.currentActiveProject]} />

              {/* foreach end */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

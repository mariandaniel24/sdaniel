import FsLightbox from "fslightbox-react";
class Modal extends React.Component {
  state = {
    toggler: false
  }
  render() {
    const modalClassNames = this.props.isModalActive ? "is-active" : "";
    return (
      <div id="modal-id" className={`modal modal-fx-fadeInScale ${modalClassNames}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.project.title}</p>
            <button className="delete" aria-label="close" />
          </header>
          <FsLightbox
            toggler={this.state.toggler}
            sources={[
              "https://i.imgur.com/fsyrScY.jpg",
              "https://www.youtube.com/watch?v=xshEZzpS4CQ",
              "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            ]}
          />
          <section className="modal-card-body">
            <div className="container">
              <div className="row">
                <div className="col-md-7 modal-images-box">
                  <div className="projects-row">
                    {this.props.project.images.map(img => {
                      return (
                        <div className="project-box">
                          <div className="modal-main-image-box shadow-6">
                            <a href={img} className="zoom-link">
                              <img
                                className="img-responsive modal-main-image shadow-1"
                                src={img}
                                alt={`Preview image of the ${this.props.project.title} project.`}
                              />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-center">
                    <i className="fa fa-search" /> Click to zoom in
                  </p>
                </div>
                <div className="col-md-5 align-content-sm-start">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="modal-info-box">
                        {/* <h5 className="modal-title">{this.props.project.title}</h5> */}
                        <p>{this.props.project.long_description}</p>
                        <a href={this.props.project.website} target="_blank" className="round-button md btn-primary portfolio-button">
                          Go to website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="modal-card-foot" />
        </div>
      </div>
    );
  }
}
export default Modal;

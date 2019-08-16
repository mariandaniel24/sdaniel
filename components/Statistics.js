const Statistics = () => {
  return (
    <div className="statistics-container unselectable">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 col-sm-3 col-md-3 col-lg-2 spacing">
            <div className="stats-box">
              <div className="stats-icon">
                <i className="fa fa-clock-o" aria-hidden="true" />
              </div>
              <div className="stats-info">
                <p>
                  <span>500</span> 2000
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 col-sm-3 col-md-3 col-lg-2 spacing">
            <div className="stats-box">
              <div className="stats-icon">
                <i className="fa fa-users" aria-hidden="true" />
              </div>
              <div className="stats-info">
                <p>
                  <span>20</span> clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
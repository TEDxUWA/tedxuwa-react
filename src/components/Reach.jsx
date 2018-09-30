import React from 'react';

const Reach = () => {
  return (
    <div className="pt-4 bg-white">
      <div className="container pb-4">
        <h4 className="font-weight-bold">Our Audience</h4>
        <div className="row mt-0 mt-md-4">
          <div className="col-md-4 mt-4 mt-md-0">
            <strong className="display-4 font-weight-bold text-primary">
              2.5k
            </strong>
            <p>
              <strong>Followers</strong>
              <br />
              <span className="text-muted">on our social media platforms.</span>
            </p>
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <strong className="display-4 font-weight-bold text-primary">
              70
            </strong>
            <p>
              <strong>Speakers</strong>
              <br />
              <span className="text-muted">at our events to date.</span>
            </p>
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <strong className="display-4 font-weight-bold text-primary">
              854
            </strong>
            <p>
              <strong>Subscribers</strong>
              <br />
              <span className="text-muted">on our mailing list.</span>
            </p>
          </div>
        </div>
      </div>
      {/* <hr />
      <button className="btn btn-link bg-dark text-white py-3 text-center border-radius-0 w-100">
        Download our prospectus&nbsp;&#x25BE;
      </button> */}
      <hr />
    </div>
  );
};

export default Reach;

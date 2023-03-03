import React from "react";
import VideoPlayer from "../videoPlayer/VideoPlayer";

import "./modal.css";

const Modal = ({ title, seedrLink, trailer, idx }) => {
  return (
    <div>
      <button
        type="button"
        className="btn modal-btn"
        data-toggle="modal"
        data-target={`#modal-${idx}`}
      >
        See More
      </button>

      <div
        className="modal fade"
        id={`modal-${idx}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title thanking-customers-section-modal-title">
                {title} Movie Trailer
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <VideoPlayer youtubeLink={trailer} idx={idx} />
            </div>
            <div className="modal-footer">
              <a href={seedrLink}>
                <button className="btn btn-success">Download</button>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import VideoPlayer from "../videoPlayer/VideoPlayer";

import "./modal.css";

const Modal = ({ title, seedrLink, trailer, idx }) => {
  return (
    <div>

      <button type="button" class="btn modal-btn" data-toggle="modal"
        data-target={`#bd-example-modal-lg-${idx}`}
      >
        See more
      </button>

      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        id={`bd-example-modal-lg-${idx}`}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div className="modal-header bg-light">
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
          <div class="modal-content">
            <VideoPlayer youtubeLink={trailer} idx={idx} />
          </div>
          <div className="modal-footer bg-white">
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
  );
};

export default Modal;

import React from "react";
import Header from "../../components/Header/Header";
import "./UploadPage.scss";
import { Link } from "react-router-dom";

function UploadPage() {
  const uploadAlert = () => {
    alert("Upload successful");
  };

  return (
    <>
      <Header />
      <section className="upload">
        <div className="upload__inner">
          <h1 className="upload__title">Upload Video</h1>

          <form className="upload__form">
            <div className="upload__inputs">
              <div className="upload__form-group upload__form--left">
                <label className="upload__form-label" htmlFor="videoThumbnail">
                  VIDEO THUMBNAIL
                </label>
                <figure
                  className="upload__form-thumbnail"
                  id="videoThumbnail"
                  name="videoThumbnail"
                ></figure>
              </div>
              <div className="upload__form--right">
                <div className="upload__form-group">
                  <label className="upload__form-label" htmlFor="videoTitle">
                    TITLE YOUR VIDEO
                  </label>
                  <input
                    className="upload__form-input"
                    id="videoTitle"
                    name="videoTitle"
                    type="text"
                    placeholder="Add a title to your video"
                  />
                </div>
                <div className="upload__form-group">
                  <label
                    className="upload__form-label"
                    htmlFor="videoDescription"
                  >
                    ADD A VIDEO DESCRIPTION
                  </label>
                  <input
                    className="upload__form-input--tall"
                    id="videoDescription"
                    name="videoDescription"
                    type="text"
                    placeholder="Add a description to your video"
                  />
                </div>
              </div>
            </div>
            <div className="upload__form-submit--container">
              <Link
                to="/"
                type="submit"
                className="upload__form-submit"
                onClick={uploadAlert}
              >
                PUBLISH
              </Link>
              <p className="upload__form-cancel">CANCEL</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default UploadPage;

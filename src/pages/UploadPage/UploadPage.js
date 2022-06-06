import React from "react";
import Header from "../../components/Header/Header";
import "./UploadPage.scss";

function UploadPage() {
  return (
    <>
      <Header />
      <section className="upload">
        <div className="upload__inner">
          <h1 className="upload__title">Upload Video</h1>

          <form className="upload__form">
            <div className="upload__form-group">
              <label className="upload__form-label" htmlFor="videoThumbnail">
                VIDEO THUMBNAIL
              </label>
              <figure
                className="upload__form-thumbnail"
                id="videoThumbnail"
                name="videoThumbnail"
              ></figure>
            </div>
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
              <label className="upload__form-label" htmlFor="videoDescription">
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
            <div className="upload__form--submit-container">
              <button type="submit" className="upload__form-submit">
                PUBLISH
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default UploadPage;

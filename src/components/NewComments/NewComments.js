import "./NewComments.scss";
import React from "react";

function NewComments() {
  return (
    <div className="comments__new">
      <div className="comments__usericon--container">
        <figure className="comments__usericon"></figure>
      </div>
      <form className="comments__form form">
        <div className="form__group">
          <label className="form__label" htmlFor="newComment">
            JOIN THE CONVERSATION
          </label>
          <input
            className="form__input"
            id="newComment"
            name="newComment"
            type="text"
            placeholder="Add a new comment"
          />
        </div>
        <div className="form__submit-container">
          <button type="submit" className="form__submit">
            COMMENT
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewComments;

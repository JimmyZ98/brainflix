import "./CommentsList.scss";
import React from "react";

function CommentsList({ selectedVideo }) {
  return (
    <div className="comments__list">
      {selectedVideo.comments.map((comment) => {
        return (
          <div className="comments__single" key={comment.timestamp}>
            <div className="comments__avatar--container">
              <figure className="comments__avatar" />
            </div>
            <div className="comments__content">
              <p className="comments__user">{comment.name}</p>
              <p className="comments__date">
                {new Date(comment.timestamp).toLocaleDateString()}
              </p>
              <p className="comments__text">{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentsList;

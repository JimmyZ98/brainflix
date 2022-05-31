import "./Comments.scss";
import React from "react";
import NewComments from "../NewComments/NewComments";
import CommentsList from "../CommentsList/CommentsList";

function Comments({ selectedVideo }) {
  return (
    <section className="comments">
      <div className="comments__container">
        <p className="comments__count">
          {selectedVideo.comments.length} Comments
        </p>
        <NewComments />
        <CommentsList selectedVideo={selectedVideo} />
      </div>
    </section>
  );
}

export default Comments;

import "./Comments.scss";
import React from "react";
import NewComments from "../NewComments/NewComments";
import CommentsList from "../CommentsList/CommentsList";

function Comments({ selectedVideo }) {
  return (
    <section className="comments">
      <div className="comments__container">
        <h2 className="commentsNum">
          {selectedVideo.comments.length} Comments
        </h2>
        <NewComments />
        <CommentsList selectedVideo={selectedVideo} />
      </div>
    </section>
  );
}

export default Comments;

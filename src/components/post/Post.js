import React from "react";

const Post = ({ post, index, handleDelete, handleAdd }) => {
  return (
    <div>
      <div className="row">
        <strong>
          {index + 1}.{" "}
        </strong>
        <span>
          <strong>
            <a href={`https://www.reddit.com${post.data.permalink}`}>
              {" "}{post.data.title}
            </a>
          </strong>
        </span>
      </div>
      <div className="row">
        <div>
          {" "}{post.data.ups} Upvotes{" "}
        </div>
        <div>
          {post.data.subreddit_name_prefixed}
        </div>
      </div>
      <div className="row">
        {post.data.thumbnail_height ? <img src={post.data.thumbnail} alt="" /> : null}
      </div>
      
      <button className="btn btn-primary" onClick={() => handleAdd(post.data.id, post.data.permalink, post.data.title)}>
        Add to Favorites
      </button>
      <button className="btn btn-danger" onClick={() => handleDelete(post.data.id)}>
        Delete From Favorites
      </button>
    </div>
  );
};

export default Post;

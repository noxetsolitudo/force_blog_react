import React from 'react';

const Blog = ({ blogsDb, handleDelete }) => {
  return (
    <div className="border">
      {blogsDb.map((blog) => (
        <div key={blog.id}>
          <div className="blog myb-2">
            <a href="#">
              <h1>{blog.title}</h1>
            </a>
            <h2>by {blog.author}</h2>
            <p className="myb-2">{blog.content}</p>
            <button
              className="btn blog-delete"
              onClick={() => handleDelete(blog.id)}
            >
              Delete post
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;

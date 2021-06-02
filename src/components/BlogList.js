import React from 'react';
import Blog from './Blog';

const BlogList = ({ blogsDb, handleDelete }) => {
  return (
    <div>
      <Blog blogsDb={blogsDb} handleDelete={handleDelete} />
    </div>
  );
};

export default BlogList;

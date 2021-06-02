import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import Footer from './Footer';
import Navbar from './Navbar';
import DB from '../db/blogsDB.json';
import Shouts from './Shouts';
import NewPostPopup from './NewPostPopup';

const OuterWrapper = () => {
  const [blogsDb, setBlogsDb] = useState(DB);

  const onSubmit = ([title, author, content]) => {
    const obj = {
      title: title,
      author: author,
      content: content,
    };
    setBlogsDb([...blogsDb, obj]);
  };

  const handleDelete = (id) => {
    const newBlogs = blogsDb.filter((blog) => blog.id !== id);
    setBlogsDb(newBlogs);
  };

  useEffect(() => {
    console.log('useEffect ran');
  });

  return (
    <div>
      <div className="container">
        <div className="myb-2">
          <Navbar onSubmit={onSubmit} />
        </div>
        <div className="flex-row row-align-start">
          <BlogList blogsDb={blogsDb} handleDelete={handleDelete} />
          <div className="mxl-2">
            <Shouts />
          </div>
        </div>
      </div>
      <div className="footer-backround">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OuterWrapper;

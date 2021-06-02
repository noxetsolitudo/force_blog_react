import React from 'react';
import Modal from './Modal';
import NewPostPopup from './NewPostPopup';
import explosion from '../images/explosion_01.png';

const Navbar = ({ onSubmit }) => {
  const [show, setShow] = React.useState(false);
  return (
    <ul className="flex-row">
      <li className="main-title-grid">
        <img src={explosion} alt="explosion" className="layer01" />
        <h1 className="main-title layer02">Force Blog</h1>
      </li>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <button className="btn" onClick={() => setShow(true)}>
          New Post
        </button>
        <Modal show={show} onClose={() => setShow(false)}>
          <NewPostPopup onSubmit={onSubmit} onClose={() => setShow(false)} />
        </Modal>
      </li>
    </ul>
  );
};

export default Navbar;

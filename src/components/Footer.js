import React from 'react';

const Footer = () => {
  return (
    <div className="footer flex-col ">
      <div className="flex-row myb-2 ">
        <h2>Keep in touch?</h2>
        <div className="flex-row">
          <input
            className="email-input m-0"
            type="text"
            placeholder="Enter email"
          />
          <button className="btn email-submit-button">Submit</button>
        </div>
      </div>
      <p className="made-by">
        Made by{' '}
        <a href="mailto:tomaskozlik@yahoo.com" className="font-size">
          TK
        </a>
        , React and the Force.
      </p>
    </div>
  );
};

export default Footer;

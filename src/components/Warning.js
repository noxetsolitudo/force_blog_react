import React from 'react';
import wader from '../images/wader.png';

const Warning = () => {
  return (
    <small className="flex-row row-just-center">
      <img className="wader" src={wader} alt="darth" />I order you to fill all
      the fields!!!
      <img className="wader" src={wader} alt="darth" />
    </small>
  );
};

export default Warning;

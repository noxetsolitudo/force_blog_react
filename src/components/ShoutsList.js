import React from 'react';
import sabre from '../images/light_sabre01.png';

const ShoutsList = ({ shoutsDB, removeShoutHandler }) => {
  return (
    <div>
      {shoutsDB.map((shout) => (
        <div key={shout.id} className="shouts myb-1">
          <ul className=" flex-row myb-05">
            <li>
              <img className="sabre" src={sabre} alt="sabre" />
              {shout.author}
            </li>
            <li>
              <button
                className="btn shout-delete"
                onClick={() => removeShoutHandler(shout.id)}
              >
                x
              </button>
            </li>
          </ul>
          <p>{shout.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoutsList;

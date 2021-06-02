import React, { useState } from 'react';
import ShoutsList from './ShoutsList';
import DB from '../db/shoutsDB.json';
import Warning from './Warning';

const Shouts = () => {
  const [shoutsDB, setShoutsDB] = useState(DB);
  const [who, setWho] = useState('');
  const [shoutCont, setShoutCont] = useState('');
  const [warning, setWarning] = useState(false);

  const removeShoutHandler = (id) => {
    const newShout = shoutsDB.filter((shout) => shout.id !== id);
    setShoutsDB(newShout);
  };

  const shoutSubmit = () => {
    if (who && shoutCont) {
      const obj = {
        author: who,
        content: shoutCont,
      };
      setShoutsDB([...shoutsDB, obj]);
      setWho('');
      setShoutCont('');
      setWarning(false);
    } else {
      setWarning(true);
    }
  };

  return (
    <div>
      <div className="myb-2">
        <div className="myb-1">
          <input
            className="m-0"
            type="text"
            placeholder="Who"
            value={who}
            onChange={(e) => setWho(e.target.value)}
          />
        </div>
        <div className="myb-1">
          <input
            className="m-0"
            type="text"
            placeholder="Leave me a shout!"
            value={shoutCont}
            onChange={(e) => setShoutCont(e.target.value)}
          />
        </div>
        <div className="myb-1">{warning ? <Warning /> : null}</div>
        <button className="btn" onClick={shoutSubmit}>
          Shout
        </button>
      </div>
      <ShoutsList shoutsDB={shoutsDB} removeShoutHandler={removeShoutHandler} />
    </div>
  );
};

export default Shouts;

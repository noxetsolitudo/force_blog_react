import React, { useState } from 'react';
import Warning from './Warning';

const NewPostPopup = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [warning, setWarning] = React.useState(false);

  const onSubmitHandler = () => {
    if (title && author && content) {
      onSubmit([title, author, content]);
      setTitle('');
      setAuthor('');
      setContent('');
      onClose(false);
    } else {
      setWarning(true);
    }
  };

  return (
    <div className="flex-col ">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        name="content"
        cols="30"
        rows="10"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="btn submit-button" onClick={onSubmitHandler}>
        Submit
      </button>
      {warning ? <Warning /> : null}
    </div>
  );
};

export default NewPostPopup;

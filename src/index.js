import React from 'react';
import ReactDOM from 'react-dom';

const value = 'demo1';
const buttonName = 'submit';

ReactDOM.render(
    <div>
      <input type="text" value={value}/>
      <button>{buttonName}</button>
    </div>,
    document.getElementById('app'),
);

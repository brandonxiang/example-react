import React from 'react';
import ReactDOM from 'react-dom';

const value: string = 'demo1';
const buttonName: string = 'submit';

ReactDOM.render(
    <div>
      <input type="text" value={value}/>
      <button>{buttonName}</button>
    </div>,
    document.getElementById('app'),
);

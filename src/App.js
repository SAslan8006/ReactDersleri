import React from 'react';
import './App.css';
import Header from './componenets/Header';

function App() {
  // return React.createElement("div", null, "Hello");
  return (
    <div >
      <Header />
      <p className='xyz'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis repellendus facilis, reiciendis ad culpa assumenda excepturi iure ex officiis odio animi ipsum ab vitae cupiditate quaerat. Laborum, facilis eos?</p>
      <label htmlFor="name">Name:
        <input id='name' />
      </label>
    </div>
  );
}

export default App;

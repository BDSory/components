//<img alt="avatar" src={faker.image.image()} />
//when you need it...

import React from 'react';
import ReactDOM from 'react-dom';
//delete next line and revert the render if stop using createRoot
import {createRoot} from 'react-dom/client';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  )
}

//ReactDOM.render(<App />, document.querySelector('#root'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
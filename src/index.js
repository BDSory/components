//<img alt="avatar" src={faker.image.image()} />
//when you need it...
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
//delete next line and revert the render if stop using createRoot
import {createRoot} from 'react-dom/client';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
//note that: prop author is on an instance of CommDet; each is unique. The flow  is,
//info from parent to child, child (CommentDetail here) ref's prop arg
//add. note: the CommentDetail component is now itself a prop on ApprovalCard. 
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard >
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45pm" 
          comment="Way to go!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard >
        <CommentDetail 
          author="Alice" 
          timeAgo="Today at 6:23pm" 
          comment="ExplainME"
          avatar={faker.image.image()}  
        />
      </ApprovalCard>

    </div>
  )
}

//ReactDOM.render(<App />, document.querySelector('#root'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
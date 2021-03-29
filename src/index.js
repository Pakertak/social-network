import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, title: 'React', message: 'My post is about react' },
  { id: 2, title: 'React', message: 'My post is about react' },
  { id: 3, title: 'React', message: 'My post is about react' },
  { id: 4, title: 'React', message: 'My post is about react' },
];

let dialogsData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Valya' },
  { id: 4, name: 'Viktor' }
];

let messagesData = [
  { id: 1, content: 'Hi' },
  { id: 2, content: 'How are you?' },
  { id: 3, content: 'I\'m fine.' },
  { id: 4, content: 'Good luck' }
];


ReactDOM.render(
  <React.StrictMode>
    <App 
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

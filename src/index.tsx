import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
let postData = [
    {id:2, message:"I'm ok u?", likesCount: 12},
    {id:2, message:"How are you?", likesCount: 25},
    {id:2, message:"It's my first post", likesCount: 0},
]
let dialogsData = [
    {id: 1, name: "Denis"},
    {id: 2, name: "Oleg"},
    {id: 3, name: "Alexander"},
    {id: 4, name: "Yana"},
    {id: 5, name: "M.Smite"}
]
let messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"}
]

ReactDOM.render(
    <App postData={postData} dialogsData={dialogsData} messageData={messageData}/>,
  document.getElementById('root')
);
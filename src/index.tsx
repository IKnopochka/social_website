import React from 'react';
import './index.css';
import {state, subscribe} from "./state/State";
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, AllPropsType, updateNewPostText} from "./state/State";

export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscribe(renderTree);
//renderTree();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

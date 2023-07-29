import React from 'react';
import './index.css';
import {store} from "./state/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {HashRouter} from "react-router-dom";


/*export const renderTree = (store: Store<RootReducerType>) => {*/
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>


    </React.StrictMode>,
    document.getElementById('root')
);
/*}*/

/*store.subscribe(() => {
    renderTree(store)
});*/

/*renderTree(store);*/


// module.exports = {
//     preset: 'ts-jest',
//     transform: {
//         '^.+\\.(ts|tsx)?$': 'ts-jest',
//         "^.+\\.(js|jsx)$": "babel-jest",
//     }
// };


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

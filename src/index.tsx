import React from 'react';
import './index.css';
import {ReducersType, store} from "./state/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {Store} from "redux";
import StoreContext from "./StoreContext";




export const renderTree = (store: Store<ReducersType>) => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <Provider store={store}>
                    <App store={store}/>
                </Provider>
            </StoreContext.Provider>


        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    renderTree(store)
});

renderTree(store);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from './components/App';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT_POSTS': {
            return Object.assign({}, state, {posts: action.posts})
        }
        case 'POST_REMOVE': {
            console.log(action.postId)
            return state
        }
        default:
            return state;
    }
};
const initialState = {
    posts: []
};
const store = createStore(reducer, initialState);

store.subscribe(() => {
    console.log('subscribe', store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

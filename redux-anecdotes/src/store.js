import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdoteReducer from './reducers/anecdoteReducer';

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
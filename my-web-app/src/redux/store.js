// src/redux/store.js

import { createStore, combineReducers } from 'redux';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  product: productReducer,
  // you can add more reducers here
});

const store = createStore(rootReducer);

export default store;

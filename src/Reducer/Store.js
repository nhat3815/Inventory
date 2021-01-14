import {RootReducer} from './RootReducer.js';
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { createNetworkMiddleware } from "react-native-offline";

const logger = createLogger();

export const store = createStore(
  RootReducer,
  
  applyMiddleware(thunkMiddleware, logger),
);

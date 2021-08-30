import thunk from 'redux-thunk';
// import logger from './logger'; using redux DevTools instead of logger middleware
import { applyMiddleware } from 'redux';

export default applyMiddleware(thunk);

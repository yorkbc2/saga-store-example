// Imports
import {
	createStore,
	applyMiddleware
} from "redux";
import createSagaMiddleware from "redux-saga";

import mainReducer from "./reducer/mainReducer.js";
import mainSaga from "./sagas";
// Code...

const sagaMiddleware = createSagaMiddleware();
const store 		 = createStore(mainReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mainSaga);

export default store;
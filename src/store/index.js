import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";

import rootSaga from './sagas';

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(rootSaga);

export default store;
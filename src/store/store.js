import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducer from "../reducers/rootReducer";

const initialStore = {};
const middleWare = [thunk];

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  initialStore,
  composeEnchancers(applyMiddleware(...middleWare))
);

export const persistor = persistStore(store);
export default { store, persistor };

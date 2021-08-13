import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import initialReducer from "./initialReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["initialReducer"],
};

const rootReducer = combineReducers({ initialReducer });

export default persistReducer(persistConfig, rootReducer);

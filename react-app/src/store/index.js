import { createStore,combineReducers, applyMiddleware, compose } from "redux";

import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { articlesReducer } from "./articles/reducer";

const middlewares = [thunk];

const persistConfig = {
  key:"gb1909",
  storage,
}

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  articles:articlesReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor= persistStore(store);

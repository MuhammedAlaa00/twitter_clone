import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { reducer } from "./user/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
export const makeStore = () => createStore(reducer, composeWithDevTools());

export const wrapper = createWrapper(makeStore);

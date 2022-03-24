import { combineReducers, createStore } from "redux";

import categoryReducer from "./actions/reducers/category.reducer";
import moneyReducer from "./actions/reducers/moneyReducer";

const RootReducer= combineReducers({
categories: categoryReducer,
money: moneyReducer
})

export default createStore(RootReducer)
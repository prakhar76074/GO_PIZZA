
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {getAllPizzaReducer, addPizzaReducer , updatePizzaByIdReducer} from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer , getAllUsersReducer } from "./reducers/userReducer";
import { loginUserReducer } from "./reducers/userReducer";
import { placeOrderReducer } from "./reducers/orderReducer";
import { getUserOrdersReducer  } from "./reducers/orderReducer";
import { getPizzaByIdReducer } from "./reducers/pizzaReducer";
const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer:registerUserReducer,
  loginUserReducer:loginUserReducer,
placeOrderReducer :placeOrderReducer,
getUserOrdersReducer:getUserOrdersReducer,
addPizzaReducer:addPizzaReducer,
getPizzaByIdReducer:getPizzaByIdReducer,
updatePizzaByIdReducer:updatePizzaByIdReducer,
getAllUsersReducer:getAllUsersReducer

});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')):null

const initialState = {
  cartReducer: {
    cartItems : cartItems,

  },
  loginUserReducer: {
    currentUser:currentUser
  }
}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
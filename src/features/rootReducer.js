import  {createStore,combineReducers} from 'redux';
import countReducer from './Count/Reducer';
import todoReducer from './Todo/Reducer';
import CartReducer from './Cart/CartReducer';

const rootReducer = combineReducers({
    counter: countReducer, // counter state is managed by counterReducer
    todo: todoReducer,
    cart: CartReducer
});

export default  rootReducer;
import  {combineReducers} from 'redux';
import countReducer from './Count/Reducer';
import todoReducer from './Todo/Reducer';
import CartReducer from './Cart/CartReducer';
import postReducer from './Posts/postReducer';
import userReducer from './Users/userReducer';
import  ProductReducer from './Products/productReducer';



const rootReducer = combineReducers({
    counter: countReducer, // counter state is managed by counterReducer
    todo: todoReducer, // todo state is managed by todoReducer
    cart: CartReducer, // cart state is managed by cartReducer
    posts: postReducer, // posts state is managed by postReducer
    users: userReducer, // users state is managed by userReducer
    products:ProductReducer // products listing
});

export default  rootReducer;
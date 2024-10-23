import  {createStore,combineReducers} from 'redux';
import countReducer from './Count/Reducer';
import todoReducer from './Todo/Reducer';

const rootReducer = combineReducers({
    counter: countReducer, // counter state is managed by counterReducer
    todo: todoReducer
});

const  store = createStore(rootReducer);

export default store;
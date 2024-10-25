import HighOrderComponent from "../HOC/HighOrderComponent";
import { INCREMENT, DECREMENT } from "../features/Count/Action";
import { useSelector, useDispatch } from "react-redux";


function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const handleClick = (action) => {
        dispatch({ type: action });
    }
    return ( <div>
         <h1>Hello World</h1>
        <h1>Count value is {count}</h1>
        <button onClick={() => handleClick(INCREMENT)}>INCREMENT</button> ||
        <button onClick={() => handleClick(DECREMENT)}>DECREMENT</button>
    </div> );
}

export default HighOrderComponent(Counter);
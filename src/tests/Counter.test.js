import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Counter from "../Components/Counter";


const mockStore = configureStore([]);

test("increments counter on button click", () => {
  const store = mockStore({
    counter: { count: 0 }, // Mock initial state
  });

  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  const button = screen.getByText(/Increment/i);
  fireEvent.click(button);
  
  // Expect state change (mock store doesn't update automatically)
  expect(store.getActions()).toEqual([{ type: "INCREMENT" }]);
  
});

test("increments counter on button click", () => {
    const store = mockStore({
      counter: { count: 0 }, // Mock initial state
    });
  
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  
    const button = screen.getByText(/Decrement/i);
    fireEvent.click(button);
    
    // Expect state change (mock store doesn't update automatically)
    expect(store.getActions()).toEqual([{ type: "DECREMENT" }]);
    
  });

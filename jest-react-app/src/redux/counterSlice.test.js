import reducer, { increment, addByAmount } from "./counterSlice";
import { fetchCount } from "./counterSlice";

describe("counter reducer tests", () => {
  test("increment increases value by 1", () => {
    const initial = { value: 0, loading: false };
    const newState = reducer(initial, increment());
    expect(newState.value).toBe(1);
  });

  test("addByAmount increases value correctly", () => {
    const initial = { value: 3, loading: false };
    const newState = reducer(initial, addByAmount(4));
    expect(newState.value).toBe(7);
  });
});

describe("async thunk tests", () => {
  test("fetchCount updates value after fulfilled", async () => {
    const initial = { value: 0, loading: false };

    const action = { type: fetchCount.fulfilled, payload: 5 };

    const newState = reducer(initial, action);

    expect(newState.value).toBe(5);
    expect(newState.loading).toBe(false);
  });
});

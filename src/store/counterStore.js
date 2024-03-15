import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 10,
  title: "Hi Zustand",
  increment: (value) =>
    set((state) => ({
      count: state.count + value,
    })),
  decrement: (value) =>
    set((state) => ({
      count: state.count == 0 ? state.count : state.count - value,
    })),

  reset: () =>
    set((state) => ({
      count: (state.count = 0),
    })),
}));

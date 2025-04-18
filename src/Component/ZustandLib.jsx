import { create } from "zustand";

const ZustandLib = create((set)=>({
    count: 0,
    increment:() => set((state)=>({ count: state.count + 1})),
    decrement: () => set((state)=>({ count: state.count - 1})),
    reset: () => set(({count:0}))
}))

export default ZustandLib;
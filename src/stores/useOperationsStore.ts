import create from "zustand"
import { devtools, persist } from "zustand/middleware"

interface OperationsState {
  // each input is either a number or an operator
  inputs: Array<number | string>
  addinput: (inp: number | string) => void
}

const useBearStore = create<OperationsState>()(
  devtools(
    persist(
      (set) => ({
        inputs: [],
        addinput: (inp) =>
          set((state) => {
            const newInps = [...state.inputs]

            const lastInp = newInps ? newInps[newInps.length - 1] : null

            const setLastInp = (inpp: number | string) =>
              (newInps[newInps.length - 1] = inpp)

            if (lastInp) {
              // if the last input is string
              if (typeof lastInp === "string") {
                if (typeof inp === "string") {
                  // if the new input is string we
                  // wanna replace the last input
                  // with the new one
                  setLastInp(inp)
                }
                // if the new input is number we just wanna
                // add it to the list
                else {
                  newInps.push(inp)
                }
              }
              // if last input is number
              if (typeof lastInp === "number") {
                // if the new input is string we just wanna
                // add it to the list
                if (typeof inp === "string") {
                  newInps.push(inp)
                }

                // if the new input is also number
                // we wanna add this entered number
                // to it
                else {
                  setLastInp(lastInp * 10 + inp)
                }
              }
            }

            return {
              inputs: newInps,
            }
          }),
      }),
      {
        name: "bear-storage",
      }
    )
  )
)

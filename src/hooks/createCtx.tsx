import * as React from 'react'

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 * @return [ctx, Provider] - a tuple containing 1) the Context and 2) its corresponding Provider component with value already set
 * @param {React.Reducer<State, Action>} reducer - the reducer function for updating the context's state
 * @param {State} initialState - the context's intial state
 */
export function createCtx<State, Action>(
    reducer: React.Reducer<State, Action>,
    initialState: State,
) {
    const defaultDispatch: React.Dispatch<Action> = () => initialState  // This is a placeholder function...
    const ctx = React.createContext({
        state: initialState,
        dispatch: reducer || defaultDispatch,  // ...so we can safely create the context without having to use null/undefined, in case the regular reducer doesn't exist yet
    })
    function Provider(props: React.PropsWithChildren<{}>) {
        const [state, dispatch] = React.useReducer(reducer, initialState)
        return <ctx.Provider value={{ state, dispatch }} {...props} />
    }
    return [ctx, Provider] as const  // "as const" makes TypeScript infer a tuple, rather than an array
}
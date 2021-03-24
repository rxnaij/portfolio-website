/**
 * ThemeContext hook provides information about website's current appearance.
 */
import { useContext } from 'react'
import { createCtx } from './createCtx'

/** 
 * For the theme state, we'll first define initial state and type definitions
 */ 
const initialState = {
    theme: 'dark',
    animation: true
}
type ThemeState = {
    theme: 'dark' | 'light',
    animation: boolean
}
type Action = 
    | { type: 'toggleDarkMode' }
    | { type: 'toggleAnimationMode' }

/**
 * Defines actions to take on the current theme state.
 * @param {ThemeState} state - previous state of theme
 * @param {ACTIONTYPE} action - name of action
 */
function themeReducer (state: ThemeState, action: Action ) {
    switch (action.type) {
        /* Toggles dark and light modes in the app */
        case 'toggleDarkMode':         
            return {
                ...state,
                theme: state.theme === 'dark' ? 'light' : 'dark',
            }
        default:
            throw new Error(`${action.type} isn't a valid action type.`)
    }
}

/**
 * Provides a Context object and a Provider parent component to use in the app.
 */
export const [ThemeContext, ThemeProvider] = createCtx(themeReducer, initialState)

export function useThemeState() {
    const context = useContext(ThemeContext)
    if (context === undefined) throw new Error("useThemeState() must be called from within a ThemeProvider component or its descendant.")
    return context.state
}

export function useThemeReducer() {
    const context = useContext(ThemeContext)
    if (context === undefined) throw new Error("useThemeReducer() must be called from within a ThemeProvider component or its descendant.")
    return context.dispatch
}
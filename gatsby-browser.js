/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react'

import { ThemeProvider } from './src/hooks/ThemeContext.ts' // Provides context for theme

/**
 * Wraps the root element in global Context providers to provide global state.
 * @param element - the element belonging to the root of the Gatsby document
 */
export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider>
            {element}
        </ThemeProvider>
    )
}
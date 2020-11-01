/**
 * Hook for toggling between dark mode in the website
 */
import { useState, useEffect } from 'react'

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    
    return [theme, toggleTheme]
}
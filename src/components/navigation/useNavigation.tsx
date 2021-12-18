import { ReactNode, useState, createContext, useContext } from 'react'
import { NavLink } from './Sidebar'

interface NavigationContext {
    activeNav: NavLink
    setActiveNav: (prevState: NavLink) => void
}

const NavigationContext = createContext<NavigationContext>(null!)

interface NavigationProps {
    children: ReactNode
}

const Navigation = ({ children }: NavigationProps) => {
    const [activeNav, setActiveNav] = useState<NavLink | null>(null)

    return(
        <NavigationContext.Provider value={{ activeNav, setActiveNav }}>
            { children }
        </NavigationContext.Provider>
    )
}

export default Navigation
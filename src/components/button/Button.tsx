import * as React from 'react'

import cn from 'classnames'

import { useThemeState } from '../../hooks/ThemeContext'
import { buttonClass, outline, secondary } from './Button.module.scss'

interface ButtonInjectedProps {
    className: string
    children: React.ReactNode
}

export interface ButtonProps {
    children: React.ReactNode,
    renderContainer?: (props: ButtonInjectedProps) => React.ReactNode
    className?: string|null,
    
    // Button variants
    variant?: 'outline'|'secondary'|null,

    // Icon component
    icon?: React.ReactNode
    collapse?: 'sm'

}

const Button = ({ 
    children, 
    className, 
    variant, 
    renderContainer=(props) => <button {...props} />
}: ButtonProps) => {
    const { theme } = useThemeState()
    return renderContainer({
        className: cn({
            [buttonClass]: true,
            "a-no-style": true,
            className,

            [outline]: variant === 'outline',
            [theme]: variant === 'outline',
            
            [secondary]: variant === 'secondary'
        }),
        children
    })

}

export default Button
import * as React from 'react'
import cn from 'classnames'

import { useThemeState } from '../../hooks/ThemeContext'
import { buttonClass, outline } from './Button.module.scss'

export interface ButtonProps {
    children: React.ReactNode,
    className?: string|null,
    
    // Possible button states
    state?: 'active'|null,
    
    // Button variants
    variant?: 'outline'|'secondary'|null,
    
    // Event listener callback function
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,

    // Icon component
    icon?: React.ReactNode
    collapse?: 'sm'
}

const Button = ({children, className, state, variant, onClick, icon, collapse}: ButtonProps) => {
    const { theme } = useThemeState()
    return(
        <button
            className={cn({
                [buttonClass]: true,
                'button--activated': state === 'active',
                [outline]: variant === 'outline',
                [theme]: variant === 'outline', // sets outline button text color to same as regular text
                [className]: true,
            })}
            onClick={(event): void => {
                if (onClick) {
                    event.preventDefault()
                    onClick(event)
                }
            }}
        >
            {
                icon && 
                <span
                    className={`icon
                        ${collapse ? 'collapse--' + collapse : ''}
                    `}
                    role="img"
                >
                    {icon}
                </span>
            }
            {children}
        </button>
    );
}

export default Button
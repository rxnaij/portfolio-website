import * as React from 'react'
import cn from 'classnames'
import { buttonClass, outline, secondary, buttonIcon } from './Button.module.scss'
import { Icon } from 'react-bootstrap-icons'

interface ButtonInjectedProps {
    className: string
    children: React.ReactNode
}

export interface ButtonProps {
    children: React.ReactNode,
    renderContainer?: (props: ButtonInjectedProps) => React.ReactNode
    className?: string,
    
    // Button variants
    variant?: 'outline'|'secondary'|null,

    // Icon component
    icon?: Icon
    collapse?: 'sm'

}

const Button = ({ 
    children, 
    className, 
    variant, 
    icon,
    renderContainer=(props) => <button {...props} />
}: ButtonProps) => {
    const Icon = icon
    return renderContainer({
        className: cn({
            [buttonClass]: true,
            // "a-no-style": true,
            [className]: className !== undefined,

            [outline]: variant === 'outline',
            
            [secondary]: variant === 'secondary'
        }),
        children: (
            <>
                { icon && <Icon className={buttonIcon} /> }
                { children }
            </>
        )
    })

}

export default Button
import * as React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

const { buttonClass, outline, secondary, buttonIcon } = styles
import type { Icon } from 'react-bootstrap-icons'

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
    const IconComponent = icon
    return renderContainer({
        className: cn(buttonClass, className, {
            [outline]: variant === 'outline',
            [secondary]: variant === 'secondary'
        }),
        children: (
            <>
                { IconComponent && <IconComponent className={buttonIcon} /> }
                { children }
            </>
        )
    })

}

export default Button
import * as React from 'react'
import styles from './Toggle.module.scss'

interface ToggleProps {
    className?: string,
    horizontal?: boolean,
    name: string,
    labelText: string,
    offText: string,
    onText: string,
    onToggle: () => void,
}

export default function Toggle ({className, horizontal, name, labelText, offText, onText, onToggle}: ToggleProps) {
    const [isActive, set] = React.useState(false)
    return (    
        <>
            <input
                className={styles.input}
                id={name}
                type="checkbox"
                name={name}
                onChange={() => {
                    set(isActive => !isActive)
                    onToggle()
                }}  
            />
            <label
                className={`${styles.label} ${className}`}
                htmlFor={name}
            >
                {labelText}
                <span className={styles.switch}>
                    <span className={styles.state}>{isActive ? onText : offText}</span>
                </span>
            </label>
        </>
    )
}

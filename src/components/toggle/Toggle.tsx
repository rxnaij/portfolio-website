/**
 * A Toggle component that represents a user-controlled on/off switch.
 * Based off the Carbon Design System Toggle design - https://www.carbondesignsystem.com/components/toggle/usage
 */

import * as React from 'react'
import styles from './Toggle.module.scss'

interface ToggleProps {
    className?: string,
    name: string,
    labelText: string,  // This is the label that describes the component
    // Labels describing the on and off states
    offText: string,
    onText: string,
    onToggle: () => void,   // Callback function to call when toggle is switched
}

export default function Toggle ({className, name, labelText, offText, onText, onToggle}: ToggleProps) {
    const [isActive, set] = React.useState(false)
    return (    
        <div className={className}>
            <input
                aria-labelledby={name + '-label'}
                className={styles.input}
                id={name}
                type="checkbox"
                name={name}
                onChange={() => {
                    set(isActive => !isActive)
                    onToggle()
                }}
                value={isActive}
            />
            <label
                id={name + '-label'}
                className={styles.label}
                htmlFor={name}
                tabIndex={0}
            >
                {labelText}
                <span className={styles.switch}>
                    {/** @todo This is currently hidden behind the switch. Change styles to accomodate flex? */}
                    <span className={styles.state}>{isActive ? onText : offText}</span>
                </span>
            </label>
        </div>
    )
}
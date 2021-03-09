/**
 * A Toggle component that represents a user-controlled on/off switch.
 * Based off the Carbon Design System Toggle design - https://www.carbondesignsystem.com/components/toggle/usage
 */

import * as React from 'react'
import { input, label, switchbutton } from './Toggle.module.scss'

interface ToggleProps {
    className?: string,
    name: string,
    labelText: string,  // This is the label that describes the component
    // Labels describing the on and off states
    offText: string,
    onText: string,
    value: string,          // Semantic value of toggle (belongs => value prop)
    condition: boolean,     // Boolean value of toggle (belongs => checked prop)
    onToggle: () => void,   // Callback function to call when toggle is switched
}

export default function Toggle ({className, name, labelText, offText, onText, value, condition, onToggle}: ToggleProps) {
    const [isActive, set] = React.useState(false)
    return (    
        <div className={className}>
            <input
                aria-labelledby={name + '-label'}
                className={input}
                id={name}
                type="checkbox"
                name={name}
                value={value}
                checked={condition}
                onChange={() => {
                    set(isActive => !isActive)
                    onToggle()
                }}
            />
            <label
                id={name + '-label'}
                className={label}
                htmlFor={name}
                tabIndex={0}
            >
                {labelText}
                <span
                    className={switchbutton}
                >
                </span>
            </label>
        </div>
    )
}

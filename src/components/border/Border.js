import React from 'react'

export default function Border({children}) {
    return (
        <div className="position-relative">
            {children}
            <div style={{ 
                'zIndex': '-1',
                'maxWidth': '80%', 
                'position': 'relative',
                'left': '1.5rem',
                'top': '-0.65rem',
                'borderBottom': '20px solid hsl(51, 100%, 75%)'
            }}></div>
        </div>
    )
}

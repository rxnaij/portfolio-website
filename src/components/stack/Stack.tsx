import React from 'react'

type Size = 'none' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl'

const sizes = {
    none: 0,
    xs: 4,
    sm: 8,
    base: 16,
    md: 24,
    lg: 32,
    xl: 48,
    '2xl': 64
}

interface StackProps {
    children: React.ReactNode
    padding?: Size
    gap?: Size
    flexDirection?: 'row' | 'column'
    justifyContent?: string
    alignItems?: string
}

const Stack = ({ 
    children, 
    padding="none", 
    gap="none", 
    flexDirection='row', 
    justifyContent='flex-start', 
    alignItems='flex-start' 
}: StackProps) => {
    return (
        <div
            style={{
                display: 'flex',
                padding: sizes[padding],
                gap: sizes[gap],
                flexDirection,
                justifyContent,
                alignItems
            }}
        >
            { children }
        </div>
    )
}

export default Stack

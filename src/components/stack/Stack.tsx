import React from 'react'
import { stack } from './Stack.module.scss'

type Size = 'none' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl'

const sizes = {
    none: 0,
    xs: 4,
    sm: 8,
    base: 16,
    md: 24,
    lg: 32,
    xl: 48,
    '2xl': 64,
    '3xl': 128
}

interface StackProps {
    children: React.ReactNode
    padding?: Size
    paddingX?: Size
    paddingY?: Size
    gap?: Size
    flexDirection?: 'row' | 'column'
    justifyContent?: string
    alignItems?: string
}

const Stack = ({ 
    children, 
    padding="none",
    paddingX="none",
    paddingY="none",
    gap="none", 
    flexDirection='row', 
    justifyContent='flex-start', 
    alignItems='flex-start' 
}: StackProps) => {
    return (
        <div
            className={stack}
            style={{
                padding: sizes[padding],
                paddingLeft: sizes[paddingX],
                paddingRight: sizes[paddingX],
                paddingTop: sizes[paddingY],
                paddingBottom: sizes[paddingY],
                gap: sizes[gap],
                flexDirection,
                justifyContent,
                alignItems,
            }}
        >
            { children }
        </div>
    )
}

export default Stack

import React from 'react'
import cn from 'classnames'
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
    className?: string
    padding?: Size
    paddingX?: Size
    paddingY?: Size
    gap?: Size
    flexDirection?: 'row' | 'column'
    justifyContent?: string
    alignItems?: string,
    alignSelf?: string,
    style?: React.CSSProperties
    asList?: boolean
}

const Stack = ({ 
    children, 
    className,
    padding="none",
    paddingX="none",
    paddingY="none",
    gap="none", 
    flexDirection='row', 
    justifyContent='flex-start', 
    alignItems='flex-start',
    alignSelf="flex-start",
    style,
    asList
}: StackProps) => {
    const Container = asList ? 'ul' : 'div'
    return (
        <Container
            className={cn({
                [stack]: true,
                [className]: className !== undefined
            })}
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
                alignSelf,
                ...style
            }}
        >
            { children }
        </Container>
    )
}

export default Stack

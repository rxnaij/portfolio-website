import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import classNames from 'classnames'

import * as styles from './Flipcard.module.scss'

interface Props {
    front?: React.ReactNode,
    back?: React.ReactNode,
    className?: string,
}

export default function Flipcard({front, back, className}: Props) {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    return (
        <div
            className={classNames(
                styles.card,
                className
            )} 
            role="presentation" onClick={() => set(state => !state)}
        >
            <animated.div
                className={classNames(styles.face)}
                style={{
                    opacity: opacity.interpolate((o: number) => 1 - o),
                    transform
                }}
            >
                {front}
            </animated.div>
            <animated.div 
                className={classNames(styles.face)}
                style={{
                    opacity,
                    transform: transform.interpolate((t: string) => `${t} rotateX(180deg)`)
                }}
            >
                {back}
            </animated.div>
        </div>
    )
}
import React, { useState } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useSpring, animated } from 'react-spring'
import cn from 'classnames'
import { useThemeState } from '../../hooks/ThemeContext.ts'
import Stack from '../stack/Stack'

import { Lock } from 'react-bootstrap-icons'

import { blurb } from './WorkSection.module.scss'

const WorkBlurb = props => {
    const [hover, setHover] = useState(false)
    const themeState = useThemeState()
    // const highlightColor = themeState.theme === 'dark' ? 'white' : 'black'  // Highlight color is the inverse of the theme color
    const highlightColor = `hsl(168, 48%, 48%)`
    const { borderBottom, boxShadow } = useSpring({
        borderBottom: `4px solid ${hover ? highlightColor : `transparent`}`,
        boxShadow: `${highlightColor} ${hover? `10px 10px` : `0px 0px`} 0`
    })
    return(
        <Link 
            className={`${blurb} a-no-style`} 
            to={props.protected ? `/work/secret/${props.slug}` : `/work/${props.slug}`}
        >
            <animated.div 
                style={{ 
                    boxShadow,
                    lineHeight: 0
                }}
            >
                <GatsbyImage
                    image={props.thumbnail}
                    alt={props.alt}
                />
            </animated.div>
            <animated.h3
                style={{
                    borderBottom,
                }}
            >
                {props.title}
                {props.protected && <Lock color="hsl(168, 48%, 48%)" size="1.5rem" />}
            </animated.h3>
            <p>{props.projectDates}</p>
            <p>{props.projectType}</p>
            <p>{props.description}</p>
        </Link>
    )
}

export default WorkBlurb
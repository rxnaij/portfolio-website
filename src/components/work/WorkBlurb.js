import React, { useState } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useSpring, animated } from 'react-spring'
import { useThemeState } from '../../hooks/ThemeContext.ts'

import { Lock } from 'react-bootstrap-icons'

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
        <Link className={'a-no-style'} to={props.protected ? `/work/secret/${props.slug}` : `/work/${props.slug}`}>
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
                className="align-self-start"
                style={{
                    borderBottom,
                }}
            >
                {props.title}
                {props.protected && <Lock className="ml-2" color="hsl(168, 48%, 48%)" size="1.5rem" />}
            </animated.h3>
            <p className="text-muted mb-0">{props.projectDates}</p>
            <p className="text-muted mb-3">{props.projectType}</p>
            <p>{props.description}</p>
        </Link>
    )
}

export default WorkBlurb
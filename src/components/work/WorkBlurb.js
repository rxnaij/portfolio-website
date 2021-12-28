import React, { useState } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'
import { useSpring, animated } from 'react-spring'
import { useThemeState } from '../../hooks/ThemeContext.ts'
import Stack from '../stack/Stack'

import { Lock } from 'react-bootstrap-icons'

import { blurb, details, icon, coverImage } from './WorkSection.module.scss'

const WorkBlurb = props => {
    const [hover, setHover] = useState(false)
    const themeState = useThemeState()
    // const highlightColor = themeState.theme === 'dark' ? 'white' : 'black'  // Highlight color is the inverse of the theme color
    const highlightColor = `hsl(168, 48%, 48%)`
    const { borderBottom, boxShadow } = useSpring({
        borderBottom: `4px solid ${hover ? highlightColor : `transparent`}`,
        boxShadow: `${highlightColor} ${hover ? `10px 10px` : `0px 0px`} 0`
    })
    return(
        <Link 
            className={cn(
                blurb,
                `a-no-style`
            )} 
            to={props.protected ? `/work/secret/${props.slug}` : `/work/${props.slug}`}
        >
            <Stack gap="lg" flexDirection="column">
                <animated.div 
                    className={coverImage}
                    style={{ 
                        // boxShadow,
                        lineHeight: 0
                    }}
                >
                    <GatsbyImage
                        image={props.thumbnail}
                        alt={props.alt}
                    />
                </animated.div>
                <Stack gap="base" flexDirection="column">
                    <animated.h3
                        style={{
                            borderBottom,
                        }}
                    >
                        {props.protected && <Lock className={icon} width={20} height={20}  />}
                        {props.title}
                    </animated.h3>
                    <div>
                        <p className={details}>{props.projectDates}</p>
                        <p className={details}>{props.projectType}</p>
                    </div>
                    <p>{props.description}</p>
                </Stack>
            </Stack>
        </Link>
    )
}

export default WorkBlurb
import React, { useState } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useSpring, animated } from 'react-spring'
import { useThemeState } from '../../hooks/ThemeContext.ts'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const WorkBlurb = props => {
    const [hover, setHover] = useState(false)
    const themeState = useThemeState()
    const highlightColor = themeState.theme === 'dark' ? 'white' : 'black'  // Highlight color is the inverse of the theme color
    const { borderBottom, boxShadow } = useSpring({
        borderBottom: `4px solid ${hover ? highlightColor : `transparent`}`,
        boxShadow: `${highlightColor} ${hover? `10px 10px` : `0px 0px`} 0`
    })
    return(
        <Link className={'a-no-style'} to={`/work/${props.slug}`}>
            <Row
                className={`mb-5 `}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Col md={6} className="mb-3 mb-md-0">
                    <animated.div 
                        style={{ 
                            boxShadow
                        }}
                    >
                        <GatsbyImage
                            image={props.thumbnail}
                            alt={props.alt}
                        />
                    </animated.div>
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center ">
                    <animated.h3
                        className="align-self-start"
                        style={{
                            borderBottom,
                        }}
                    >
                        {props.title}
                    </animated.h3>
                    <p className="text-muted mb-0">{props.projectDates}</p>
                    <p className="text-muted mb-3">{props.projectType}</p>
                    <p className="">{props.description}</p>
                </Col>
            </Row>
        </Link>
    )
}

export default WorkBlurb
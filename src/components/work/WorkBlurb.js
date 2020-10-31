import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useSpring, animated } from 'react-spring'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import styles from './WorkBlurb.module.scss'

const WorkBlurb = props => {
    const [hover, setHover] = useState(false)
    const { borderBottom, boxShadow } = useSpring({
        borderBottom: `3px solid ${hover ? `black` : `transparent`}`,
        boxShadow: `black ${hover? `10px 10px` : `0px 0px`} 0`
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
                        <Img fluid={props.thumbnail} />
                    </animated.div>
                </Col>
                <Col md={6} className={"d-flex flex-column justify-content-center " + styles.info}>
                    <animated.h3
                        className="align-self-start"
                        style={{
                            borderBottom,
                        }}
                    >
                        {props.title}
                    </animated.h3>
                    <p className="text-muted mb-0">{props.projectDates}</p>
                    <p className="text-muted">{props.projectType}</p>
                    <p className="">{props.description}</p>
                </Col>
            </Row>
        </Link>
    )
}

export default WorkBlurb
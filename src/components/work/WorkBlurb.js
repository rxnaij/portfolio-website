import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'
import Stack from '../stack/Stack'

import { Lock } from 'react-bootstrap-icons'

import { blurb, details, icon, coverImage } from './WorkSection.module.scss'

const WorkBlurb = props => {

    return(
        <Link 
            className={cn(
                blurb,
                `a-no-style`
            )} 
            to={props.protected ? `/work/secret/${props.slug}` : `/work/${props.slug}`}
        >
            <Stack gap="lg" flexDirection="column">
                <div 
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
                </div>
                <Stack gap="sm" flexDirection="column">
                    <h3>
                        {props.protected && <Lock className={icon} width={20} height={20}  />}
                        {props.title}
                    </h3>
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
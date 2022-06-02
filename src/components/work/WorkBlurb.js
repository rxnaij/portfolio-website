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
                <div className={coverImage}>
                    <GatsbyImage
                        image={props.thumbnail}
                        alt={props.alt}
                    />
                </div>
                <h3>
                    {props.protected && <Lock className={icon} width={20} height={20}  />}
                    {props.title}
                </h3>
                <div>
                    <div className={details}>{props.projectDates}</div>
                    <div className={details}>{props.projectType}</div>
                    <p>{props.description}</p>
                </div>
        </Link>
    )
}

export default WorkBlurb
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './course-preview.module.css'

export default ({ course }) => (
  <div className={styles.preview}>
    
    <h3 className={styles.previewTitles}>
      <Link to={`/course/${course.slug}`}>{course.title}</Link>
    </h3>
    <small>{course.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: course.shortDescription,
      }}
    />

    
  </div>
)

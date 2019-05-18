import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './course.module.css'

export default ({ course }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={course.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/course/${course.slug}`}>{course.title}</Link>
    </h3>
    <small>{course.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {course.tags.map(tag => (
      
  </div>
)

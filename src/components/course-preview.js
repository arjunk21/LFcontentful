import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './course-preview.module.css'

export default ({ course }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className={styles.previewTitles}>
      <Link to={`/course/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />

    
  </div>
)

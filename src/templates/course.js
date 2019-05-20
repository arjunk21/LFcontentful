import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class CourseTemplate extends React.Component {
  render() {
    const course = get(this.props, 'data.contentfulCourse')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img className={heroStyles.heroImage} alt={course.title} fluid={course.heroImage.fluid} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{course.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {course.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: course.description.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default CourseTemplate

export const pageQuery = graphql`
  query CourseBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCourse(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

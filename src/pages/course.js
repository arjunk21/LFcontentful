import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from "../components/layout"
import CoursePreview from '../components/course-preview'

class CourseIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulCourse.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#f6f6f6' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>
            Courses To Learn
          </div>
          <div className="wrapper">
            <h2 className="section-headline">Recent Course</h2>
            <ul className="course-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <CoursePreview course={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CourseIndex

export const pageQuery = graphql`
  query CourseIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCourse(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
	  heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          shortDescription
	 }
      }
    }
  }
`
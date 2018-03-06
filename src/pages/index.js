import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
    console.log(data)

    return(
        <div>
            {data.allMarkdownRemark.edges.map(({node}) => (
                    <div key={node.id}>
                        <Link to={node.fields.slug}>
                            <h3>{node.frontmatter.title}</h3>
                        </Link>
                        <p>{node.frontmatter.author}</p>
                        <p>{node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </div>
                ))}
        </div>
    )
}

export default IndexPage

export const query = graphql`
    query HomePageQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date
                    }
                    excerpt
                    timeToRead
                }
            }
        }
    }
`

import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const FooterM2 = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(filter: {name: {eq: "footer 2"}}){
			edges{
				node{
					id
					name
					items{
						title
						url
						object_slug
					}
				}
			}
		}
		}
    `}
    render={data => (
			<ul className="footer-link-list">
				{data &&
				data.allWordpressWpApiMenusMenusItems &&
				data.allWordpressWpApiMenusMenusItems.edges &&
				data.allWordpressWpApiMenusMenusItems.edges[0] &&
				data.allWordpressWpApiMenusMenusItems.edges[0].node &&
				data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
				data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                prop => {
					return (
						<li><Link to={prop.object_slug}>{prop.title}</Link></li>
					)
                }
                )}
			</ul>
    )}
	/>
)

export default FooterM2

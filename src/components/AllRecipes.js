import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulRecepe(sort: { fields: title, order: ASC }) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`
const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecepe.nodes

  return (
    <section
    // className="recipes-container"
    >
      {/* <TagsList recipes={recipes} /> */}
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes

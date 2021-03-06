import React from "react"

import Layout from "../components/Layout"

import { StaticImage } from "gatsby-plugin-image"
import FetchData from "../examples/fetchData"
import Gallery from "../examples/gallery"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"
const Home = () => {
  return (
    <Layout>
      <SEO title="Home Page" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/vegetable.jpg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Home

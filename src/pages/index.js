import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const Home = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="2020-03-18"
          title="My first post!"
          excerpt="Gatsby JS Course Markdown, MDX, and Frontmatter Overview"
          slug="my-first-post"
        />
      </Content>
    </Container>
  )
}

export default Home

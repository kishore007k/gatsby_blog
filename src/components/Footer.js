import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialIcons,
  FooterSocialWrapper,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      codepen: file(relativePath: { eq: "codepen.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      linkedIn: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="facebook logo" />
          </a>
          <a
            href="https://codepen.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.codepen.publicURL} alt="codepen logo" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="github logo" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="instagram logo" />
          </a>
          <a
            href="https://linkedIn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedIn.publicURL} alt="linkedIn logo" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          Copyright © Company. All rights reserved.
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}

import React from 'react'
import "./about.css"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"


const About = () => {
    const  data  = useStaticQuery(
        graphql`
        query {
            myImage: file(relativePath: {eq: "about.jpg"}) {
              childImageSharp {
                fixed(width: 600, height:600){
                ...GatsbyImageSharpFixed
              }
              }
            }
          }`
      )
    return (
        <Layout>
            <SEO title="about"/>
        <div>
            
        <Img className="photo" fixed ={data.myImage.childImageSharp.fixed}/>

        <br></br>
           <h1>Welcome to my photography corner!</h1>
           <br></br>
           <p>I am a Lifestyle photographer specializing in Portraits.</p> <p>I capture natural but refined moments in a relaxed and stylish way, always looking for the perfect available light.</p>

<p>My name is Bharatha living in Gothenburg, automotive engineer and a professional photographer. I love sports, great outdoors, travelling and spending time with family. Photography is always something I enjoy.</p>

<p>Whether you want a beautiful portrait of your children, family or pet, an event or maternity, you’re in the right place. That’s because my goal is listening to you, understand what you want, 
    being flexible in meeting your needs and creating a visual memories that you’ll absolutely love.</p>
    <p>Photography is art and that is what I want to create for you. If you care about artistic imagery, think my style suits you perfectly and ultimately you feel that we would get along - get in touch, and together we can create something special.
Gallery</p> 
        </div>
        </Layout>
    )
}

export default About
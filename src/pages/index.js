import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from "react-bootstrap";
import {graphql} from "gatsby"
import "./index.css"

export const query = graphql` 
  query {
    coverImage: file(relativePath: {eq: "cover2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000){
        ...GatsbyImageSharpFluid
      }
      }
    }
    coupleImage: file(relativePath: {eq: "couple.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000){
        ...GatsbyImageSharpFluid
      }
      }
    }
    maternityImage: file(relativePath: {eq: "maternity.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000){
        ...GatsbyImageSharpFluid
      }
      }
    }
    familyImage: file(relativePath: {eq: "family.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000){
        ...GatsbyImageSharpFluid
      }
      }
    }
    cover3Image: file(relativePath: {eq: "cover3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000){
        ...GatsbyImageSharpFluid
      }
      }
    }
    kidImage: file(relativePath: {eq: "kid.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000){
        ...GatsbyImageSharpFluid
      }
      }
    }
  }`
  
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome To My Photography Page</h1>
    <div style={{ marginBottom: `1.45rem` }}>
      <Img
      fluid ={data.coverImage.childImageSharp.fluid}/>

<div className="push">
<Card style={{ width: '20rem',margin: '.5rem'}}>
  <Img className="card-img-top" fluid ={data.coupleImage.childImageSharp.fluid}style={{height:'20rem'}} />
  <Card.Body>
    <Card.Title>Couples</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button href="/maternity" variant="primary">Gallery</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem',margin: '.5rem' }}>
<Img className="card-img-top" fluid ={data.familyImage.childImageSharp.fluid}style={{height:'20rem'}} />  <Card.Body>
    <Card.Title>Family</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button href="/maternity" variant="primary">Gallery</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem',margin: '.5rem' }}>
<Img className="card-img-top" fluid ={data.maternityImage.childImageSharp.fluid}style={{height:'20rem'}} />  <Card.Body>
    <Card.Title>Maternity</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button href="/maternity" variant="primary">Gallery</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem',margin: '.5rem' }}>
<Img className="card-img-top" fluid ={data.kidImage.childImageSharp.fluid}style={{height:'20rem'}} />
  <Card.Body>
    <Card.Title>Kids</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button href="/maternity" variant="primary">Gallery</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem',margin: '.5rem' }}>
<Img className="card-img-top" fluid ={data.cover3Image.childImageSharp.fluid}style={{height:'20rem'}} />
  <Card.Body>
    <Card.Title>Portaits</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="/maternity">Gallery</Button>
  </Card.Body>
</Card>
</div>
    </div>
  </Layout>
)

export default IndexPage


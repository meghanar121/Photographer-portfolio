import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Page two" />
    
   <h1> PORTRAIT PACKAGES</h1>

 <h2>Plan59</h2>
 <ul>+ About 40 minutes of Photo shoot</ul>
 <ul>+ 4 digital images of 4K resolution will be delivered by google drive</ul>
 <ul>+ More pictures than the 4 included are available for purchase</ul>
 <ul>+ Package Cost 590 sek</ul>


<h2>Plan98</h2>
<ul>+ About 75 minutes of Photo shoot</ul>
<ul>+ 7 digital images of 4K resolution will be delivered by google drive</ul>
<ul>+ You have option to choose 7 images from 12 pictures</ul>
<ul>+ More pictures than the 7 included are available for purchase</ul>
<ul>+ Package Cost 980 sek</ul>

<h2>Plan148</h2>
<ul>+ About 120 minutes of Photo shoot</ul>
<ul>+ 12 digital images 4K resolution will be delivered by google drive</ul>
<ul>+ You have option to choose 12 images from 20 pictures</ul>
<ul>+ More pictures than the 12 included are available for purchase</ul>
<ul>+ You can choose location of your choice with no additional cost</ul>
<ul>+ Package Cost 1480 sek</ul>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage

import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2><b>JAMstack Hackathon 2018</b></h2>
      <h1>My first BootCamp!!</h1>
        <p><b>Name:</b> Troy Lawrence</p>
         <br></br>
       <p>I am an infant developer, but an aspiring rising star.</p>
       <p>I just started studying Computer Science in the Bay Area and am super excited to get my feet wet.</p>
       <p>Now it's time for me to go and build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

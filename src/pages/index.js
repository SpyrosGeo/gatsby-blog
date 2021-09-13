import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"



const IndexPage = () =>{
  return(
    <Layout pageTitle="Home?">

      <p>Something..Something.. Gatsby </p>
      <StaticImage 
      alt="Some kind of dog.. I'dont know what I'm doing anymore..."
      src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large">
      </StaticImage>
      <StaticImage 
      alt="Some kind of dog.. I'dont know what I'm doing anymore..."
      src="../images/dog.jpeg">
      </StaticImage>
    </Layout>
  )
}
export default IndexPage

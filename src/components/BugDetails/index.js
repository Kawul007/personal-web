import React from 'react'
import { BugDetailContent,BugDetailWrapper,BugDetailImage } from './BugDetails.style'
import Img from "../../images/blog-img16.jpg"
const BugDetails = () => {
  return (
    <BugDetailWrapper>
        <BugDetailImage src={Img}></BugDetailImage>
        <BugDetailContent></BugDetailContent>
    </BugDetailWrapper>
  )
}

export default BugDetails
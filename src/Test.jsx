import React from 'react';
import ReactDOM from 'react-dom/client';

import tw from "tailwind-styled-components"

const Container = tw.div`
 flex flex-col h-auto
`
const SectionData = tw.section`
  m-8 bg-blue-800 h-screen
`

const Test = () => {
  return (
    <Container>
      <SectionData>1</SectionData>
      <SectionData>2</SectionData>
      <SectionData>3</SectionData>
      <SectionData>4</SectionData>
    </Container>
  )
}

export default Test;
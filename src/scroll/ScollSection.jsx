import React from 'react'

import tw from "tailwind-styled-components"

const SectionData = tw.section` 
  bg-blue-800 flex flex-col items-center justify-center
 `

export default function ScollSection({ height }) {
  return (
    <SectionData style={{ height: `${height}px` }}>ScollSection</SectionData>
  )
}

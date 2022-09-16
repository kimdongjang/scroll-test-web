import React, { createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { debounce, throttle } from 'lodash';
import ReactScrollWheelHandler from "react-scroll-wheel-handler"

import tw from "tailwind-styled-components"
import useScrollFadeIn from './hooks/useScrollFadeIn';

const MainWrapper = tw.div`
  w-full flex flex-col 
`
const Container = tw.div`
  overflow-y-auto
`
const SectionData = tw.section` 
  m-8 bg-blue-800 h-screen 
  `

const ScrollTest = () => {
  const scrollRefs = useRef([]);
  /**
   * navigation 리스트 별로 ref 초기화
   */
  const list = ["MAIN", "INTRODUCE", "CASTER", "test4"];
  scrollRefs.current = list.map((_, i) => scrollRefs.current[i] ?? createRef());

  //이전 스크롤 초기값
  const beforeScrollY = useRef(0);
  const [scrollIndex, setScrollIndex] = useState(1);

  let cur = 0;

  const outerDivRef = useRef();
  // useEffect(() => {
  //   const wheelHandler = (e) => {
  //     e.preventDefault();
  //     const { deltaY } = e;
  //     const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
  //     const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
  //     console.log("scrollTop  : " + scrollTop)
  //     console.log(pageHeight)

  //     if (deltaY > 0) {
  //       if (cur < scrollRefs.current.length - 1) {
  //         scrollRefs.current[++cur].current.scrollIntoView({ behavior: "smooth" });
  //         setScrollIndex(cur)
  //       }
  //       else {
  //         scrollRefs.current[scrollRefs.current.length - 1].current.scrollIntoView({ behavior: "smooth" });
  //         setScrollIndex(cur)
  //       }
  //     } else {
  //       // 스크롤 올릴 때
  //       if (cur > 0) {
  //         scrollRefs.current[--cur].current.scrollIntoView({ behavior: "smooth" });
  //         setScrollIndex(cur)
  //       }
  //     }
  //   };

  //   const outerDivRefCurrent = outerDivRef.current;
  //   outerDivRefCurrent.addEventListener("wheel", wheelHandler);
  //   return () => {
  //     outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
  //   };
  // }, []);

  const animatedItem = useScrollFadeIn();


  return (
    <MainWrapper>
      <Container ref={outerDivRef}>
        <SectionData ref={scrollRefs.current[0]}>
        </SectionData>
        <SectionData {...animatedItem} >2</SectionData>
      </Container >
    </MainWrapper>
  )
}

export default ScrollTest;
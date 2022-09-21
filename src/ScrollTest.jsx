import React, { createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { debounce, throttle } from 'lodash';
import ReactScrollWheelHandler from "react-scroll-wheel-handler"

import tw from "tailwind-styled-components"
import useScrollFadeIn from './hooks/useScrollFadeIn';
import useWindowResize from './hooks/useWindowSize';

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
  const [scrollIndex, setScrollIndex] = useState(1);
  const [translateValue, setTranslateValue] = useState(0);
  const outerDivRef = useRef();


  const windowSize = useWindowResize(outerDivRef.current);
  let cur = 1;
  const max = 4;

  const moveDown = () => {
    setTranslateValue((prev) => prev + windowSize.height);
  };

  const moveUp = () => {
    setTranslateValue((prev) => prev - windowSize.height);
  };
  const wheelHandler = (e) => {
    console.log(windowSize.height)
    // const { deltaY } = e;
    // if (deltaY > 0) {
    //   // 스크롤 위
    //   moveUp();

    // } else {
    //   // 스크롤 아래
    //   moveDown();
    // }
  }

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

  const [translateY, setTranslateY] = useState(0);
  useEffect(() => {
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("scroll", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("scroll", wheelHandler);
    }
  }, []);

  useEffect(() => {
    outerDivRef.current.style.transition = 'all 0.5s ease-in-out';
    outerDivRef.current.style.transform = `translateY(-${translateValue}px)`;

  }, [translateValue])

  return (
    <MainWrapper>
      <Container ref={outerDivRef} >
        <SectionData />
        <SectionData />
        <SectionData />
        <SectionData />
      </Container >
    </MainWrapper>
  )
}

export default ScrollTest;
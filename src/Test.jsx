import React, { createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { debounce, throttle } from 'lodash';
import ReactScrollWheelHandler from "react-scroll-wheel-handler"

import tw from "tailwind-styled-components"

const MainWrapper = tw.div`
  w-full flex flex-col h-screen 
`
const Container = tw.div`
  flex flex-col overflow-y-auto h-screen 
`
const SectionData = tw.section` 
  m-8 bg-blue-800 h-screen flex
`

const Test = () => {
  const scrollRefs = useRef([]);
  /**
   * navigation 리스트 별로 ref 초기화
   */
  const list = ["MAIN", "INTRODUCE", "CASTER"];
  scrollRefs.current = list.map((_, i) => scrollRefs.current[i] ?? createRef());

  //이전 스크롤 초기값
  const beforeScrollY = useRef(0);
  let index = 0;

  // const scrollEvent = useCallback(
  //   debounce((e) => {
  //     console.log(e)
  //     e.preventDefault()
  //     const currentScrollY = window.scrollY;
  //     console.log(currentScrollY)
  //     if (beforeScrollY.current < currentScrollY) {
  //       scrollRefs.current[++index].current.scrollIntoView({ behavior: "smooth" });
  //     } else {
  //       scrollRefs.current[--index].current.scrollIntoView({ behavior: "smooth" });
  //     }
  //     if (index < 0)
  //       index = 0;
  //     //이전 스크롤값 저장
  //     beforeScrollY.current = currentScrollY;
  //   }, 500),
  //   [beforeScrollY]
  // );

  // const scrollEvent = useCallback(throttle((newValue) => {
  //   //newValue.preventDefault()
  //   console.log(window.scrollY)
  //   const currentScrollY = window.scrollY;
  //   if (beforeScrollY.current < currentScrollY) {
  //     console.log("내림");
  //     if (index < scrollRefs.current.length - 1) {
  //       scrollRefs.current[++index].current.scrollIntoView({ behavior: "smooth" });
  //     }
  //     console.log(index)
  //   } else {
  //     console.log("올림");
  //     if (index > 0) {
  //       scrollRefs.current[--index].current.scrollIntoView({ behavior: "smooth" });
  //     }
  //     console.log(index)
  //   }
  //   //이전 스크롤값 저장
  //   beforeScrollY.current = currentScrollY;
  // }, 1000),
  //   []
  // );

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollEvent);
  //   return () => {
  //     window.removeEventListener('scroll', scrollEvent);
  //   };
  // }, [scrollEvent]);

  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      console.log("scrollTop  : " + scrollTop)
      console.log(pageHeight)

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          scrollRefs.current[1].current.scrollIntoView({ behavior: "smooth" });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          scrollRefs.current[2].current.scrollIntoView({ behavior: "smooth" });
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          scrollRefs.current[0].current.scrollIntoView({ behavior: "smooth" });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          scrollRefs.current[1].current.scrollIntoView({ behavior: "smooth" });
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          // outerDivRef.current.scrollTo({
          //   top: pageHeight + DIVIDER_HEIGHT,
          //   left: 0,
          //   behavior: "smooth",
          // });
          // setScrollIndex(2);
          scrollRefs.current[2].current.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);


  return (
    <MainWrapper>
      <Container ref={outerDivRef}>
        <SectionData ref={scrollRefs.current[0]}>1</SectionData>
        <SectionData ref={scrollRefs.current[1]}>2</SectionData>
        <SectionData ref={scrollRefs.current[2]}>3</SectionData>
        <SectionData>4</SectionData>
      </Container >
    </MainWrapper>
  )
}

export default Test;
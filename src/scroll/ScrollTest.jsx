import React, { createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { create, debounce, throttle } from 'lodash';
import ReactScrollWheelHandler from "react-scroll-wheel-handler"

import tw from "tailwind-styled-components"
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import useWindowResize from '../hooks/useWindowSize';
import ScollSection from './ScollSection';

const MainWrapper = tw.div`
  w-full h-full flex flex-col 
`
const Container = tw.div`
`
const SectionData = tw.section` 
  m-8 bg-blue-800
  `

const DIVIDER_HEIGHT = 5;


const ScrollTest = () => {
  const outerDivRef = useRef();

  const windowSize = useRef(getWindowDimensions());
  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [scrollIndex, setScrollIndex] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(getWindowDimensions().height);
  const SectionList = 5;

  let scrollIndexLet = 0;
  let initialY = null;


  const moveDown = () => {
    if (DIVIDER_HEIGHT <= scrollIndexLet) return;
    scrollIndexLet += 1;
    setScrollIndex(scrollIndexLet);
  };

  const moveUp = () => {
    if (scrollIndexLet <= 0) return;
    scrollIndexLet -= 1;
    setScrollIndex(scrollIndexLet);
  };
  useEffect(() => {
    console.log("scrollIndex :: " + scrollIndex)
    console.log(windowSize.current.height * scrollIndex)
    outerDivRef.current.style.transition = 'all 1s ease-in-out';
    outerDivRef.current.style.transform = `translateY(-${windowSize.current.height * scrollIndex}px)`;
  }, [scrollIndex])


  // const moveDown = () => {
  //   console.log("move down")
  //   if (DIVIDER_HEIGHT <= scrollIndex) return;
  //   console.log("set 호출 전 : " + scrollIndex)
  //   setScrollIndex(scrollIndex + 1);
  //   console.log("set 호출 후 : " + scrollIndex)
  // }

  // const moveUp = () => {
  //   console.log("move Up")
  //   if (scrollIndex <= 1) return;

  //   setScrollIndex(scrollIndex - 1);
  // };

  let timeout;
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }



  useEffect(() => {
    const initTouch = (e) => {
      initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
    }

    const wheelHandler = (e) => {
      e.preventDefault();
      clearTimeout(timeout);//이전 휠 이벤트 제거
      timeout = setTimeout(function () {

        windowSize.current = getWindowDimensions();
        const { deltaY } = e;
        if (deltaY < 0) {
          moveUp()
        }
        else if (deltaY > 0) {
          moveDown()
        }

      }, 300);

    }


    const swipeDirection = (e) => {
      e.preventDefault();
      windowSize.current = getWindowDimensions();
      if (initialY !== null) {
        const currentY = `${e.touches ? e.touches[0].clientY : e.clientY}`;

        let diffY = initialY - currentY;

        if (diffY < 0) {
          moveUp()
        }
        else if (diffY > 0) {
          moveDown()
        }
        initialY = null;
      }
    }

    const handleResize = () => {
      windowSize.current = getWindowDimensions();
      setSectionHeight(windowSize.current)
    }

    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    const outerDivRefCurrent = outerDivRef.current;
    window.addEventListener(wheelEvent, wheelHandler, { passive: false });
    window.addEventListener('resize', handleResize);
    window.addEventListener("touchstart", initTouch, { passive: false });
    window.addEventListener('touchmove', swipeDirection, { passive: false });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener(wheelEvent, wheelHandler, { passive: false });
      window.removeEventListener('touchmove', swipeDirection, { passive: false });
    }
  }, [])


  // 현재 포지션 계산
  // const calculatePosition = useMemo(() => scrollIndex.current * windowSize.current.height,
  //   [scrollIndex.current, windowSize.current.height])
  // const updatePosition = () => {
  //   console.log(calculatePosition)
  //   outerDivRef.current.style.transition = 'all 0.5s ease-in-out';
  //   outerDivRef.current.style.transform = `translateY(-${calculatePosition}px)`;
  //   console.log("translateValue : " + scrollIndex.current + windowDimensions.height)
  //   console.log("scrollIndex : " + scrollIndex.current)
  // }


  return (
    <MainWrapper ref={outerDivRef}>
      <Container >
        <ScollSection height={windowSize.current.height} />
        <ScollSection height={windowSize.current.height} />
        <ScollSection height={windowSize.current.height} />
        <ScollSection height={windowSize.current.height} />

      </Container >
    </MainWrapper>
  )
}

export default ScrollTest;
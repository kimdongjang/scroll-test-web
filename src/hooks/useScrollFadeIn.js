import { useCallback, useEffect, useRef } from 'react';

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
  const dom = useRef();
  /**
   * 방향을 입력받아서 어느 방향에서 translate가 일어날지를 외부에서 주입받음
   * @param {} name 
   * @returns 
   */
  const handleDirection = (name) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    };
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      console.log(dom)
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      };
    },
    [delay, duration],
  );

  /**
   * 스크롤 이벤트가 발생할 경우 IntersectionObserver로 현재 dom 상태 연결
   */
  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    }
  };
};

export default useScrollFadeIn;
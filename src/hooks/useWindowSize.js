import { useEffect, useState } from "react"


const useWindowResize = () => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);

  const handleResize = () => {
    setCurrentWidth(window.innerWidth)
    setCurrentHeight(window.innerHeight)
    console.log(window.innerWidth)
    console.log(window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
    window.addEventListener('wheel', handleResize);
    console.log("adad")
    return () => {
      console.log("rere")
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      window.removeEventListener('wheel', handleResize);
    }
  }, []);

  return {
    width: currentWidth,
    height: currentHeight,
  }
}

export default useWindowResize;
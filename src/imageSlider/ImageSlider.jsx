import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './imageSlider.css'

const ImageSlider = ({ data }) => {
  console.log(data);

  const [imageList, setImageList] = useState([data[data?.length - 1], ...data, data[0],]);
  const [currentImgIndex, setCurrentImgIndex] = useState(1);


  const [style, setStyle] = useState({
    height: '100%',
    width: '100%',
  });


  const nextImage = () => {
    setCurrentImgIndex(currentImgIndex + 1);
    setStyle({
      transform: `translateX(-${currentImgIndex + 1}00%)`,
      transition: `all 0.4s ease-in-out`,
    })
  }
  const prevImage = () => {
    setCurrentImgIndex(currentImgIndex - 1);
    setStyle({
      transform: `translateX(-${currentImgIndex - 1}00%)`,
      transition: `all 0.4s ease-in-out`,
    })

  }
  useEffect(() => {
    if (currentImgIndex === 0) {
      setCurrentImgIndex(imageList.length - 2);
      setTimeout(function () {
        setStyle({
          transform: `translateX(-${imageList.length - 2}00%)`,
          transition: '0ms',
        });
      }, 2000);
    }

  }, [])

  return (
    <div className="imageSlideWrap">
      <div className="imageSliderContainer">
        <div style={style} className="flex">
          {imageList?.map((image, i) => {
            return (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img key={i} src={image} className="imageContent" />
            )
          })}
        </div>


      </div>
      <div className="absolute w-full flex justify-between top-[50 %]">
        < button className="text-white text-xl" onClick={prevImage} >
          <IoIosArrowBack />
        </button>
        <button className="text-white text-xl" onClick={nextImage}>
          <IoIosArrowForward />
        </button>
      </div>

    </div>
  )
}

export default ImageSlider;
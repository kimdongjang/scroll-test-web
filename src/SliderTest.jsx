import React from "react";
import "./styles.css";
import Slider from 'react-touch-drag-slider'
import tw from "tailwind-styled-components"

const MainWrapper = tw.div`
  w-screen h-screen flex flex-col
`
const MainData = tw.div`
w-screen h-screen text-white
`
export default function SliderTest() {
  const projectList = [
    {
      title: "Nature's Life",
      image: "",
      description:
        "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. "
    },
    {
      title: "Into The Waters",
      image: "",
      description:
        "Duis at tellus vitae velit aliquet varius. Fusce luctus libero et ligula tristique lobortis. Vestibulum eu placerat risus, eu semper augue. Integer at purus sit amet elit pretium viverra. Suspendisse id fringilla nibh, nec dictum urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
    },
    {
      title: "Higher Than The Stars",
      image: "",
      description:
        "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. Proin rhoncus magna lectus, nec consequat augue ultricies eu."
    },
    {
      title: "Miniature Wonders",
      image: "",
      description:
        "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. "
    },
    {
      title: "Giants Of History",
      image: "",
      description:
        "Duis at tellus vitae velit aliquet varius. Fusce luctus libero et ligula tristique lobortis. Vestibulum eu placerat risus, eu semper augue. Integer at purus sit amet elit pretium viverra. Suspendisse id fringilla nibh, nec dictum urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
    }
  ];

  const sliderSettings = {
    data: projectList,
    speed: 1000,
    bgColor: "#070707",
    easings: "power",
    showButton: true,
    buttonText: "View projects",
    buttonHref: "https://www.example.com",
    buttonTarget: "_self"
  };

  return (
    <MainWrapper className="App">

      <Slider
        onSlideComplete={(i) => {
          console.log('finished dragging, current slide is', i)
        }}
        onSlideStart={(i) => {
          console.log('started dragging on slide', i)
        }}
        activeIndex={0}
        threshHold={100}
        transition={0.5}
        scaleOnDrag={true}
      >
        {projectList.map(({ title, image, description }, index) => (
          <MainData key={index}>
            <div>{title}</div>
            <div>{image}</div>
            <div>{description}</div>
          </MainData>
        ))}
      </Slider>
    </MainWrapper>
  );
}

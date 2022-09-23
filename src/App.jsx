import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import ScrollTest from './scroll/ScrollTest';
import Test2 from './Test2';
import ReponsiveTest from './ReponsiveTest';
import SliderTest from './SliderTest';
import ImageSlider from './imageSlider/ImageSlider';



function App() {
  return (
    // <SliderTest />
    // <ScrollTest />
    <ImageSlider data={[
      "./images/1.jpg",
      "./images/2.jpg",
      "./images/3.jpg",
      "./images/4.jpg",]} />
  );
}

export default App;

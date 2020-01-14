import React from 'react';
import { Parallax } from 'react-parallax';
import {useWindowDimensions} from './WindowDimensions'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  backgroundColor: "#e8eaf6"
};
const insideStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "black",
  fontSize: 40,
  fontWeight: 100,
  width: "300px",
  backgroundColor: "rgba(255,255,255,0.8)",
  padding: 30,
  borderRadius: 10,
};
// const Separator = () => { return <h1>| | |</h1>}
const ParallaxBox = (props) => {
  const { height } = useWindowDimensions();

  return <div style={{
    height: height,
  }}>
    <div style={insideStyles}>{props.children}</div>
  </div>
}
const MyParallax = (props) => {
  const { height } = useWindowDimensions();

  return <div>
    <Parallax
      bgImage={props.img}
      strength={300}
      bgImageStyle={{
        width: "auto",
        height: height,
      }}
      blur={{ min: -1, max: 3 }}
    >
      <ParallaxBox>
        {props.children}
      </ParallaxBox>
    </Parallax>
  </div>
}

const App = () => (
  <div style={styles}>
    <MyParallax img={'img/1.jpg'}>Pirates of the Kanal</MyParallax>
    <MyParallax img={'img/8.jpg'}>das Badner Tubing Event</MyParallax>
    <MyParallax img={'img/9.jpg'}>am Wiener Neustädter Kanal</MyParallax>
    <MyParallax img={'img/2.jpg'}>22. August 2020</MyParallax>
    <MyParallax img={'img/5.jpg'}>15:00 Uhr</MyParallax>
    <MyParallax img={'img/3.jpg'}>bis Sonnenuntergang</MyParallax>
    <MyParallax img={'img/6.jpg'}>mit vielen Features</MyParallax>
    <MyParallax img={'img/7.jpg'} last={true}>Keep calm and float on</MyParallax>
  </div>
);
export default App;

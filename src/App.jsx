import React from 'react';
import { Parallax } from 'react-parallax';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontSize: 40,
  fontWeight: 100
};
const ParallaxBox = (props) => {
  return <div style={{ height: 0.9*window.innerHeight }}>
    {props.children}
  </div>
}
const Separator = () => { return <h1>| | |</h1>}

const App = () => (
  <div style={styles}>
    <Parallax
        bgImage={'img/1.jpg'}
        strength={200}
        blur={{ min: -1, max: 3 }}
    >
      <ParallaxBox>
        <div style={insideStyles}>
          Pirates of the Kanal
        </div>
      </ParallaxBox>
    </Parallax>
    <Separator />
    <Parallax
        bgImage={'img/2.jpg'}
        strength={200}
        blur={{ min: -1, max: 3 }}
    >
      <ParallaxBox>
        <div style={insideStyles}>
          am 22. August 2020
        </div>
      </ParallaxBox>
    </Parallax>
    <Separator />
    <Parallax
      bgImage={'img/3.jpg'}
      strength={200}
      blur={{ min: -1, max: 3 }}>
      <ParallaxBox>
        <div style={insideStyles}>
          um 15:00 Uhr
        </div>
      </ParallaxBox>
    </Parallax>
    <Separator />
    <Parallax
      bgImage={'img/4.jpg'}
      strength={200}
      blur={{ min: -1, max: 3 }}>
      <ParallaxBox>
        <div style={insideStyles}>
          Tubes nicht vergessen!
        </div>
      </ParallaxBox>
    </Parallax>
  </div>
);
export default App;

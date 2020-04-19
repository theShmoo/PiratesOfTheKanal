import React from "react";
import { Heading } from "rebass"
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

import Hero from "./Hero"
import ScrollDownIndicator from "./ScrollDownIndicator"
import Checklist from "./Checklist"
import Section from "./Section"
import Testimony from "./Testimony"
import MyMap from "./MyMap"
import {featherCheckmark} from "./FeatherCheckmark"

const FastHero = (props) => {
    return <Hero
      color="black"
      bg="white"
      bgOpacity={props.opacity ? props.opacity : 0.4}
      backgroundImage={props.img}
    >
      {props.heading ? <Heading
          fontSize={[ 5, 6, 7 ]}
          bg='primary'
          p="1ex"
          >{props.heading}</Heading> : ""}
      {props.subheading ? <Heading
        fontSize={[ 5, 6, 7 ]}
        bg='primary'
        p="1ex"
        >{props.subheading}</Heading> : ""}
      <ScrollDownIndicator/>
    </Hero>
}

const App = props => (
  <ThemeProvider theme={theme}>
    <FastHero
      img="img/1.jpg"
      heading="Pirates of the Kanal"
      subheading="das Badner Tubing Event" />
    <Section width={1}
      heading="Hard Facts">
      <Checklist
        children={[
          "auf dem Wiener Neustädter Kanal",
          "am 22. August 2020",
          "von 15:00 Uhr",
          "bis Sonnenuntergang",
        ]}
        checkmark={featherCheckmark}/>
    </Section>
    <FastHero
      img="img/7.jpg"
      heading="Keep calm and float on"
      subheading="Relax, Recover, Restore"/>
    <Section
      width={1}
      heading="Was unsere Tuber sagen"
      justifyContent="space-around">
        <Testimony
          authorAvatar="img/avatar_2.jpg"
          authorTitle="Tuber"
          p="1ex">
             Amazing Experience and I would definitely do it again. Good services, staff were very friendly and inviting. A life time experience.
        </Testimony>
        <Testimony
          authorAvatar="img/avatar.jpg"
          authorName="Lakob"
          authorTitle="Tubing Expert"
          p="1ex">
            Best. Tubing. Ever.
        </Testimony>
    </Section>
    <FastHero
      img="img/5.jpg"
      heading="Aber Wo genau?"/>
    <Section width={1}
      heading="Da." />
    <Hero>
      <MyMap />
      <ScrollDownIndicator/>
    </Hero>
    <Section width={1}
      heading="Dort." />
    <FastHero
      img="img/4.jpg"
      heading="Stay Tubed!"/>
    <Section width={1}
      heading="Du brauchst">
      <Checklist
        children={[
          "Tube",
          "Proviant",
          "Zuschauer",
        ]}
        checkmark={featherCheckmark}/>
    </Section>
    <FastHero
      img="img/8.jpg"
      opacity={0.01}
    />
    <Section width={1}
      heading="Tube on">
    </Section>
  </ThemeProvider>
)

export default App;

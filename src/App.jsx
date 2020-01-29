import React from "react";
import { Heading } from "rebass"
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'
import {
  Hero, ScrollDownIndicator, Section, Checklist, Testimony
} from "react-landing-page"
import MyMap from "./MyMap"

const featherCheckmark = <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24" height="24"
  viewBox="0 0 24 24"
  fill="none" stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
  <polyline points="22 4 12 14.01 9 11.01"/>
</svg>

const FastHero = (props) => {
    return <Hero
      color="black"
      bg="white"
      bgOpacity={props.opacity ? props.opacity : 0.4}
      backgroundImage={props.img}
    >
      {props.heading ? <Heading
          bg="rgba(77, 200, 233, 0.6)"
          p="1ex"
          >{props.heading}</Heading> : ""}
      {props.subheading ? <Heading
        bg="rgba(77, 200, 233, 0.6)"
        p="1ex"
        >{props.subheading}</Heading> : ""}
      <ScrollDownIndicator/>
    </Hero>
}

const App = props => (
  <ThemeProvider theme={preset}>
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
          authorName="Lakob Julich"
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
    <Hero alignItems="flex-start" alignContent="flex-start" justifyContent="flex-start">
      <MyMap/>
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

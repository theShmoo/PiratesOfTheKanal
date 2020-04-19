import React from "react";

// material-ui
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import withRoot from './withRoot';
import MyMap from "./MyMap"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      margin: theme.spacing(1),
      display: 'inherit',
      width: '100%',
      height: '100%',
    },
    main: {
      padding: theme.spacing(2),
      margin: theme.spacing(1),
      width: '100%',
      height: '100%',
    },
    hero: {
      width: '100%',
      height: '90%',
    },
    fullscale: {
      width: '100%',
      height: '100%',
    },
    list: {
      width: '100%',
      maxWidth: 360
    },
    section: {
      margin: theme.spacing(3),
      width: '100%',
      height: '100%',
    },
    text: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
    }
  }),
);

const Heading = ({children}) => {
  const classes = useStyles();
  return <Typography variant="h4" color="primary" className={classes.text}>
    {children}
  </Typography>
};

const Subheading = ({children}) => {
  const classes = useStyles();
  return <Typography variant="h5" color="secondary" className={classes.text}>
    {children}
  </Typography>
}


const Section = ({heading, subheading, children}) => {
  const classes = useStyles();
  return <Paper square elevation={4}>
    <Grid item xs={12} className={classes.section}>
    {heading ? <Heading>{heading}</Heading> : ""}
    {subheading ? <Subheading>{subheading}</Subheading> : ""}
    {children}
  </Grid>
  </Paper>
}

const Checklist = ({items, checkmark}) => {
  const classes = useStyles();
  const listItems = items.map((item, i) => <ListItem key={i} button>
      <ListItemIcon>
        <CheckCircleIcon />
      </ListItemIcon>
      <ListItemText primary={item} />
    </ListItem>
  );
  return <List component="nav" className={classes.list}>
    {listItems}
    </List>
}

const Hero = ({heading, subheading, img, children}) => {
  const classes = useStyles();
  const style = img ? {
        background: "url(" + img + ") no-repeat center center",
        backgroundSize: "cover",
        resize: "both",
      } : {};
  return <Paper square elevation={4} className={classes.hero}>
      <Grid item xs={12}
        className={classes.fullscale}
        style={style}
      >
        {(heading || subheading) ? <Box bgcolor="rgba(255, 255, 255, .9)" className={classes.opaque}>
          {heading ? <Heading>{heading}</Heading> : ""}
          {subheading ? <Subheading>{subheading}</Subheading> : ""}
        </Box> : ""}
        {children}
      </Grid>
    </Paper>
}

const Testimony = ({avatar, name, title, children}) => {
  return <ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar src={avatar} />
  </ListItemAvatar>
  <ListItemText
    primary={name}
    secondary={children} />
  </ListItem>
}

const App = props => {
  const classes = useStyles();
  return <Grid container spacing={2} className={classes.root}>
    <Hero
      img="img/1.jpg"
      heading="Pirates of the Kanal"
      subheading="das Badner Tubing Event" />
    <Section heading="Hard Facts">
      <Checklist
        items={[
          "auf dem Wiener Neustädter Kanal",
          "am 22. August 2020",
          "von 15:00 Uhr",
          "bis Sonnenuntergang",
        ]}/>
    </Section>
    <Hero
      img="img/7.jpg"
      heading="Keep calm and float on"
      subheading="Relax, Recover, Restore"/>
    <Section
      heading="Was unsere Tuber sagen">
      <List component="nav" className={classes.list}>
        <Testimony
          avatar="img/avatar_2.jpg"
          name="Q"
          title="Tuber">
             Amazing Experience and I would definitely do it again. Good services, staff were very friendly and inviting. A life time experience.
        </Testimony>
        <Testimony
          avatar="img/avatar.jpg"
          name="Lakob"
          title="Tubing Expert">
            Best. Tubing. Ever.
        </Testimony>
      </List>
    </Section>
    <Hero
      img="img/5.jpg"
      heading="Aber Wo genau?"/>
    <Section heading="Da." />
    <Hero>
      <MyMap />
    </Hero>
    <Section heading="Dort." />
    <Hero
      img="img/4.jpg"
      heading="Stay Tubed!"/>
    <Section heading="Du brauchst">
      <Checklist
        items={[
          "Tube",
          "Proviant",
          "Zuschauer",
        ]}/>
    </Section>
    <Hero
      img="img/8.jpg"
      opacity={0.01}
    />
    <Section heading="Tube on" />
  </Grid>
};

export default withRoot(App);

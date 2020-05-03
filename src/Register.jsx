import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  }
});

const FormDialog = ({classes}) => {

  const [error, setError] = React.useState("Ungültige Email Adresse.");
  const [mail, setMail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const hasError = error !== ""
  const handleRegister = () => {
    if(hasError) return;
    const url = 'https://potcs.pfahler.at/subscribe';
    const msg = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ "mail": mail }),
    };
    fetch(url, msg)
      .then((response) => {
        if(response.status === 200) {
          setDone(true);
        }
        else {
           setError("Mein Server mag diese Mail Adresse nicht...");
        }
      })
      // this would recover the error message
      //.then( data => setError("sending failed..." + data.errors[0].msg))
      .catch(() => {
          setError("Fehler beim Senden der Adresse...");
      });
  };

  const handleChange = (e) => {
    if(e.target.checkValidity(e.target.value))
    {
      setMail(e.target.value);
      setError("");
    }
    else {
      setMail("");
      setError("Ungültige Email Adresse.");
    }
  }

  return (
    <form className={classes.root}>
      <InputLabel htmlFor="my-email">
        Um Neuigkeiten über diese Website zu abonnieren, gib bitte hier deine E-Mail-Adresse ein. Wir senden gelegentlich Updates.
      </InputLabel>
      <TextField
        required
        error={hasError}
        margin="dense"
        id="my-email"
        label="Email Adresse"
        aria-describedby="my-helper-text"
        helperText={error}
        type="email"
        onChange={handleChange}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            handleRegister();
            ev.preventDefault();
          }
        }}
        fullWidth
      />
      <Button
        variant="contained"
        disabled = {done || hasError}
        onClick={handleRegister}
        className={classes.button}
        color={done ? "secondary" : "primary"}
        endIcon={done ? <DoneIcon /> : <SendIcon />}>
        Subscribe
      </Button>
      {done ? <Typography variant="body1" color="primary">Danke!</Typography> : ""}
    </form>
  );
}

export default withStyles(styles)(FormDialog);

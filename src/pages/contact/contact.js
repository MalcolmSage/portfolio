import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Message, setMessage] = React.useState('');



  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name', Name, 'Email', Email, 'Message', Message);
  };
  return (
    <Grid item xs={12} md={12} >
        <Card className={classes.root} square elevation='1'>
            <CardContent>
                <Typography variant="h4">
                    Contact Me
                </Typography>
            </CardContent>
            <CardContent>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                    <TextField
                    required
                    value={Name}
                    onInput={ e=>setName(e.target.value)}
                    id="outlined-required"
                    label="Name"
                    defaultValue=""
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="outlined-required"
                    value={Email}
                    onInput={ e=>setEmail(e.target.value)}
                    label="Email"
                    defaultValue=""
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="outlined-multiline-flexible"
                    value={Message}
                    onInput={ e=>setMessage(e.target.value)}
                    label='Message'
                    multiline
                    rowsMax={4}
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                    >
                        Send
                    </Button>                                    
                </form>
            </CardContent>
        </Card> 
    </Grid>
  );
}

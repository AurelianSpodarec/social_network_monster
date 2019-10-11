import React from 'react';
import loginStyles from './loginStyles';
import { makeStyles } from '@material-ui/core/styles';
import { 
    TextField, 
    Grid, 
    Link, 
    Container, 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    Typography, 
    FormControlLabel, 
    Checkbox 
} from '@material-ui/core';

const imgFriends = require('./img/friends.jpg')

// const Auth = (props) => {
//     return (
//       <Card>
//         <h2 className="header secondary">{ props.title }</h2>
//         <Input name="Email" inputRef="user email" />
//         <Input name="Password" inputRef="user password" />
//       </Card>
//     )
//   }

//   const Card = (props) => {
//     return (
//       <div className="card">
//         { props.children }
//       </div>
//     )
//   }

//   const Input = (props) => {
//     let formattedName = props.name;
//     let inputRef = props.inputRef
//     .toLowerCase()
//     .split(" ")
//     .join("_");
    
//     return (
//       <div className="custom-input input">      
//         <input type="text" id={inputRef} />
//         <label htmlFor={inputRef}>{formattedName}</label>
//       </div>
//     )
//   }
const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      width: "100%",
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));
class Layout extends React.Component {
    
    state = {

    }
    render() {
    
        const classes = useStyles;
        return (

            <div style={{ backgroundImage: "url(" + imgFriends + ")"}}>

                <Container maxWidth="xs">
                <Card className={classes.card}>
                    <CardContent>
                    <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    </form>

                    <div>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>
                    </div>

                    
                    </CardContent>
                </Card>
                </Container>


             </div>

        )
    }
}

export default Layout;
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
    Checkbox,
    Divider,
    CssBaseline,
    Box
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

    a: {
        height: "100vh",
        position: "relative"
    },
    b: {
        height: "100%",
        backgroundSize: "cover"
    }

  }));
    function Layout() {
    
   

    
      const classes = useStyles();
    
        return (
            <div className={classes.b} style={{ backgroundImage: "url(" + imgFriends + ")"}}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >

                <Container maxWidth="xs">
                {/* <CssBaseline /> */}
                <Card className={classes.card}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                    <CardContent>
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
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
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    </Grid>
                    
                    <Grid container>
                        <Grid item xs>
                        <FormControlLabel
                            control={
                            <Checkbox   
                                // checked={state.checkedB}
                                // onChange={handleChange('checkedB')}
                                value="checkedB"
                                color="primary"
                            />
                            }
                            label="Remember Me"
                        />
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body2">
                            {"Forgot password?"}
                        </Link>
                        </Grid>
                    </Grid>

                    <Grid container>                         
                        <Button variant="contained" color="primary">
                            Login
                        </Button>
                    </Grid>

                        <Box display="flex" justifyContent="center">
                            <hr orientation="horizontal"/>
                            <span>Or</span>
                            <hr orientation="horizontal"/>
                        </Box>

                    
                        <Button>Login with Google</Button>
                        <Button>Login with Facebook</Button>
                    
                    
                    </form>
                    
                    </CardContent>
                </Box>
                </Card>
                </Container>

             </Grid>
                </div>

        );
    
}

export default Layout;
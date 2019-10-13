import React from 'react';
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
    Box,
    FormControl
} from '@material-ui/core';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
import { readUsers } from './../../services/network/models/user';
  
class AuthView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        };
      }

      componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        const a = await readUsers();
        console.log(a)
    }


    onChangeLogin = () => {
        this.setState({
            ...this.state,
            isLogin: !this.state.isLogin
        })
    }

    render() {
        // const [renderLogin, setRenderLogin] = useState(true);
        // const classes = useStyles
        return (
            <Box style={{ backgroundImage: "url(" + require('./img/friends.jpg') + ")", height: '100%', backgroundSize: 'cover'}}>
                <Grid
                    spacing={0}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}
                >

                    <Container maxWidth="xs">
                    <Card>
                    <Box display="flex" justifyContent="center" alignItems="center">
                    <CardContent>

                        

                    <FormControl noValidate autoComplete="off">
                <Grid>
                    {this.state.isLogin ? 
                    <>
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
                    </>
                    : 
                    <>
                    <TextField
                        id="outlined-email-input"
                        label="Name"
                        type="text"
                        name="name"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
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
                    <TextField
                        id="outlined-password-input"
                        label="Password(Confirm)*"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    </>
                    }
                </Grid>
                
                <Grid container>
                    <Grid>
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
                    <Grid>
                        <Link href="#" variant="body2">
                            {"Forgot password?"}
                        </Link>
                    </Grid>
                </Grid>

                <Button variant="contained" color="primary">
                    {this.state.isLogin ? "Login" : "Create an account"}
                </Button>
                
                </FormControl>

                <Box display="flex" alignContent="center" justifyContent="center" >
                    <hr orientation="horizontal"/>
                    <span>Or</span>
                    <hr orientation="horizontal"/>
                </Box>

                {this.state.isLogin ? 
                    <>
                    <Button variant="contained" color="primary" fullWidth>Login with Google</Button>
                    <Button variant="contained" color="primary" fullWidth>Login with Facebook</Button>
                    </>
                : null}

                <Box display="flex" alignItems="center" flexDirection="column">
                    <p>{this.state.isLogin ? "Don't have an account?" : "Already have an account?"}</p>
                    <Link onClick={this.onChangeLogin} href="#" variant="body2">
                        {this.state.isLogin ? "Create an account" : "Login"}
                    </Link>
                </Box>       









                    </CardContent>
                    </Box>
                    </Card>
                    </Container>

                </Grid>
            </Box>
        )
    }
}

export default AuthView;
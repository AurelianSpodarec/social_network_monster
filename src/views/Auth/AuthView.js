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
import { readUsers } from './../../services/network/models/user';
  
class AuthView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            loginEmail: "",
            loginPassword: "",
            registerEmail: "",
            registerName: "",
            registerPassword: "",
            registerPasswordConfirm: "",
            stayLoggedIn: false,
            agreeTOS: false,
        };
      }

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        const a = await readUsers();
        console.log(a)
    }

    onLogin = async () => {
        const data = {
            "email": this.state.loginEmail,
            "password": this.state.loginPassword
        }
        
        await fetch('http://localhost:3001/users/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(data => {return data.json()})
        .then(res => {console.log(res)})
        .catch(error => {console.log(error)})
        
    }

    onRegister = async () => {
        const data = {
            "email": this.state.registerEmail,
            "firstName": this.state.registerName,
            "password": this.state.registerPassword
        }
        await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(data => {return data.json()})
        .then(res => {console.log(res)})
        .catch(error => {console.log(error)})
        
    }

    onChangeTextField = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
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
        const { isLogin } = this.state;
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
                            {isLogin ? 
                            <>
                                <TextField
                                    label="Email"
                                    type="email"
                                    autoComplete='off'
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChangeTextField}
                                    value={this.state.loginEmail}
                                    name="loginEmail"
                                    fullWidth
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    autoComplete='off'
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChangeTextField}
                                    value={this.state.loginPassword}
                                    name="loginPassword"
                                    fullWidth
                                />
                            </>
                            : 
                            <>
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                margin="normal"
                                variant="outlined"
                                onChange={this.onChangeTextField}
                                value={this.state.registerEmail}
                                name="registerEmail"
                                fullWidth
                            />
                            <TextField
                                label="Name"
                                type="text"
                                name="name"
                                margin="normal"
                                variant="outlined"
                                onChange={this.onChangeTextField}
                                value={this.state.registerName}
                                name="registerName"
                                fullWidth
                            />
                            <TextField
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={this.onChangeTextField}
                                value={this.state.registerPassword}
                                name="registerPassword"
                                fullWidth
                            />
                            <TextField
                                label="Password(Confirm)*"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={this.onChangeTextField}
                                value={this.state.registerPasswordConfirm}
                                name="registerPasswordConfirm"
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

                        <Button onClick={isLogin ? this.onLogin : this.onRegister} variant="contained" color="primary">
                            {isLogin ? "Login" : "Create an account"}
                        </Button>
                        
                        </FormControl>

                        <Box display="flex" alignContent="center" justifyContent="center" >
                            <hr orientation="horizontal"/>
                            <span>Or</span>
                            <hr orientation="horizontal"/>
                        </Box>

                        {isLogin ? 
                            <>
                            <Button variant="contained" color="primary" fullWidth>Login with Google</Button>
                            <Button variant="contained" color="primary" fullWidth>Login with Facebook</Button>
                            </>
                        : null}

                        <Box display="flex" alignItems="center" flexDirection="column">
                            <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
                            <Link onClick={this.onChangeLogin} href="#" variant="body2">
                                {isLogin ? "Create an account" : "Login"}
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
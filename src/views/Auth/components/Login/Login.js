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

export const Login = (props) => {
    return (
        <>
            <FormControl noValidate autoComplete="off">
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

                <Button variant="contained" color="primary">
                    Login
                </Button>
                
                </FormControl>

                <Box display="flex" alignContent="center" justifyContent="center" fullWidth>
                    <hr orientation="horizontal"/>
                    <span>Or</span>
                    <hr orientation="horizontal"/>
                </Box>

                <Button variant="contained" color="primary" fullWidth>
                    Login with Google
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                    Login with Facebook
                </Button>

                <Box item display="flex" alignItems="center" flexDirection="column">
                    <p>Don't have an account?</p>
                    <Link href="#" variant="body2">
                        {"Create an account"}
                    </Link>
                </Box>              
        </>
    )
}

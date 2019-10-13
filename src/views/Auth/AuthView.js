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
  
class AuthView extends React.Component {

    status = {

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

                        {/* {true ? <Login /> : <Register />} */}

                    </CardContent>
                    </Box>
                    </Card>
                    </Container>

                </Grid>
            </Box>
            // </Box>
        )
    }
}

export default AuthView;
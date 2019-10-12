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


class AuthView extends React.Component {

    status = {

    }

    render() {
        const [renderLogin, setRenderLogin] = useState(true);
        
        return (
            <div className={classes.b} style={{ backgroundImage: "url(" + require('./img/friends.jpg') + ")"}}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                    >

                    <Container maxWidth="xs">
                    <Card className={classes.card}>
                    <Box display="flex" justifyContent="center" alignItems="center">

                        <CardContent>
                            {renderLogin ? <Login /> : <Register />}
                        </CardContent>
                        
                    </Box>
                    </Card>
                    </Container>

                </Grid>
            </div>
        )
    }
}

export default AuthView;


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

 


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
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
            

        );
    
}

export default Layout;
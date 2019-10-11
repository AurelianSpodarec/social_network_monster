import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
// import './index.ccss';
import HomeView from './Home/HomeView';
import ToDoView from './ToDo/ToDoView';
import LoginView from './Login/LoginView';
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core";
import Header from './../components/Header';
import Footer from './../components/Footer';


const styles = theme => ({
	"@global": {
		body: {
            height: "100%",
            margin: 0,
		},
	 
	}
});

class Layout extends React.Component {

    render() {
        return (
            <>
                <BrowserRouter>
                    {/* <Header /> */}
                    
                        <Route path="/" exact component={LoginView} />
                        <Route path="/discovery" component={ToDoView} />
                    
                    {/* <Footer /> */}
                </BrowserRouter>
            </>
        )
        
    }
}

export default withStyles(styles)(Layout);
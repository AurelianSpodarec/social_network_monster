import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
// import './index.ccss';
import HomeView from './Home/HomeView';
import ToDoView from './ToDo/ToDoView';
import LoginView from './Login/LoginView';

import Header from './../components/Header';
import Footer from './../components/Footer';

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

class Layout extends React.Component {

    render() {

        
        return (
            <>
                <BrowserRouter>
                    {/* <Header /> */}
                    
                    {/* <Container> */}
                        <Route path="/" exact component={LoginView} />
                        <Route path="/discovery" component={ToDoView} />
                    {/* </Container> */}
                    
                    {/* <Footer /> */}
                </BrowserRouter>
            </>
        )
        
    }
}

export default Layout;
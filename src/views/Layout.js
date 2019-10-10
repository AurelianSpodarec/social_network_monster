import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
// import './index.ccss';
import HomeView from './Home/HomeView';
import ToDoView from './ToDo/ToDoView';

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

        if(true) {
            return (
                <>
                    {this.props.children}
                </>
            )
        } else {
        return (
            <>
            <h1>Layout</h1>
                <BrowserRouter>
                    <Header />
                    
                    <Container>
                        <Route path="/" exact component={HomeView} />
                        <Route path="/discovery" component={ToDoView} />
                    </Container>
                    
                    <Footer />
                </BrowserRouter>
            </>
        )
        }
    }
}

export default Layout;
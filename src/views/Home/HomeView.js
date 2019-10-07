import React from 'react';

class HomeView extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        await fetch('http://localhost:3000/')
        .then(res=>res.json())
        .then(data => {
           console.log("sd", + data) 
            // this.setState({
            //     data,
            //     isLoading: false,
            // })
        })
        .catch(err => {
            console.log("Error Reading data " + err);
        });
    };

    render() {
        const { data, isLoading } = this.state;
        console.log(data)
        return (
            <div> 
                <h1>Home View</h1>
                {isLoading ? "Yes" : "No"}
            </div>
        )
    }
}

export default HomeView;
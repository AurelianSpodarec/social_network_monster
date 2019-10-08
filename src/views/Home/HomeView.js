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
            console.log("sd", data) 
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
                <ul>
                    <li>Users</li>
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Email</li>
                    <li>Password</li>
                    <li>Registered Date</li>
                </ul>
                <ul>
                    <li>
                        <span></span>
                    </li>
                </ul>

                <form>
                    <input placeholder="Name"/>
                    <input placeholder="Last Name" />
                    <input placeholder="Email"/>
                    <input placeholder="Password"/>
                    <button>Subbmit</button>
                </form>
            </div>
        )
    }
}

export default HomeView;
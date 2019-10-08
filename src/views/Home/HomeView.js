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
       
    };

    render() {
        const { data, isLoading } = this.state;

        return (
            <div style={{backgroundImage: 'url("https://images.wisegeek.com/five-people-smiling-at-each-other-at-table.jpg")'}}> 

                <div>
                    <span>Social Network</span>
                    <span>Sign In / Sign Up</span>
                </div>


                <div className="login">
                    <div>
                        <input placeholder="Your email address"/>
                        <input placeholder="Your password" />
                        <button>Login</button>
                    </div>
                    <div>
                        <span>Remember this device</span>
                        <span>Forgot password?</span>
                    </div>

                    <button>Login</button>
                </div>


                <div>
                    <input placeholder="First name"/>
                    <input placeholder="Last name" />

                    <input placeholder="Email" />
                    <input placeholder="Password" />

                    <input placeholder="Birth date" />

                    <checkbox value="Male" />
                    <checkbox value="Female" />

                </div>

            </div>
        )
    }
}

export default HomeView;
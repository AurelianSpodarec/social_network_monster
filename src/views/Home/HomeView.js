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


<div className="App" >
    <div className="w-full max-w-md bg-gray-800" >
      <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
        <div className="px-4 pb-4">
          <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
          <input type="email" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com"/>
        </div>
        <div  className="px-4 pb-4">
          <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
          <input type="password" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password"/>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
        </div>
      </form>
    </div>
  </div>


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
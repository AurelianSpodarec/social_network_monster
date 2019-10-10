import React from 'react';
const imgFriends = require('./img/friends.jpg')

class Layout extends React.Component {

    render() {
        return (

            <div className="bg-cover" style={{ backgroundImage: "url(" + imgFriends + ")"}}>


                <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-2 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name" />

                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-2 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-2 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-2 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password" />

                                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                <span>Download</span>
                                </button>

                            <div className="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the 
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Terms of Service
                                </a> and 
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>

                        <div className="text-grey-dark mt-6">
                            Already have an account? 
                            <a className="no-underline border-b border-blue text-blue" href="../login/">
                                Log in
                            </a>.
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Layout;
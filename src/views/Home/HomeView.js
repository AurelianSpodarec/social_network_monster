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
 
                     
            </div>
        )
    }
}

export default HomeView;
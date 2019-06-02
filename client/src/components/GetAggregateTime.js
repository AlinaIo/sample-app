import React from 'react';

class GetAggregateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }
    async componentDidMount() {
        const res = await fetch('http://localhost:8080/aggregate');
        const resJson = await res.json();

        if(res.status === 200) {
            this.setState({
                time: resJson.ResponseTime
            })
        }
    }

    render() {
        if(typeof this.state.time == 'number') {
            return(
                <p>Aggregation took {this.state.time} milliseconds..</p>
            );  
        }

        return(
            <p>Something went wrong..</p>
        );
    }              
}

export default GetAggregateTime;
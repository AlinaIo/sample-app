import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class GetAggregationTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/aggregate');
        const json = await response.json();

        if(response.status === 200) {
            this.setState({
                time: json.responseTime
            })
        }
    }

    render() {
        const { isLoggedIn } = this.props.authStore.values; 

        if(!isLoggedIn) {
            this.props.history.push('/login');
        }

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

export default GetAggregationTime;
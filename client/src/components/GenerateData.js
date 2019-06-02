import React from 'react';

class GenerateData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRequestSuccessful: false
        }
    }

    handleClick = async () => {
        const genereated = await fetch('http://localhost:8080/dummy', {
            method: 'post'
        });
        if(genereated.status === 201) {
            this.setState({
                isRequestSuccessful: true
            })
        }
    }
    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Generate Data!</button>
                { this.state.isRequestSuccessful && <p>Dummy data was added to DB!</p> }
            </div>
        )
    }
}

export default GenerateData;
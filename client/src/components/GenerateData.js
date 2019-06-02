import React from 'react';
import { inject, observer } from 'mobx-react';
import '../styles/GenerateData.css'

@inject('authStore')
@observer
class GenerateData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRequestSuccessful: false
        }
    }

    handleClick = async () => {
        const generated = await fetch('http://localhost:8080/dummy', {
            method: 'post'
        });
        
        if(generated.status === 201) {
            this.setState({
                isRequestSuccessful: true
            })
        }
    }
    render() {
        const { isLoggedIn } = this.props.authStore.values;
        
        if(!isLoggedIn) {
            this.props.history.push('/login');
        }

        return(
            <>
                <div className="big-button-space">
                    <div className="big-button" onClick={this.handleClick}></div>                    
                </div>
                { this.state.isRequestSuccessful && <p className="button-text">Dummy data was added to DB!</p> }
            </>
        )
    }
}

export default GenerateData;
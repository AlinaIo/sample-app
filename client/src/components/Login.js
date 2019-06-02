import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Input, Container, Header } from 'semantic-ui-react';

@inject('authStore')
@observer
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError: false
        }
    }

    componentWillUnmount() {
        this.props.authStore.reset();
    }

    handleEmailChange = e => this.props.authStore.setEmail(e.target.value);
    handlePasswordChange = e => this.props.authStore.setPassword(e.target.value);

    handleSubmit = async (e) => {
        e.preventDefault();
        const loggedIn = await this.props.authStore.login()
        console.log('----------' + loggedIn);
        if (!loggedIn) {
            this.setState({
                loginError: true
            });
        } else {
            this.props.history.push('/');
        }
    };

    render() {
        const { values } = this.props.authStore;
        const { loginError } = this.state;

        if(loginError) {
            return <p>The connection to mongoDB is not available. Login is not possible.</p>
        }

        return (
            <Container text>
                <Header as='h2'>Login</Header>
                <Input 
                    name='email' 
                    onChange={this.handleEmailChange} 
                    value={values.email} 
                    required={true}
                    placeholder='Email' 
                    fluid 
                    error
                />
                <Input
                    name='password'
                    onChange={this.handlePasswordChange} 
                    value={values.password} 
                    required={true}
                    type='password'
                    placeholder='Password' 
                    fluid 
                    error
                />
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Container>
        );
    }
};

export default Login;
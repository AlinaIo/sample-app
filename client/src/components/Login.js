import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container } from 'semantic-ui-react';
import '../styles/Login.css'

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

        if (!loggedIn) {
            this.setState({
                loginError: true
            });
        } else {
            this.props.history.push('/generate');
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
                <div className="lr-wrapper" align="center">
                    <div className="lr-content">
                        <div className="lr-main">
                        <form id="l-f">
                            <input 
                                type="text" 
                                id="username_login" 
                                name="l-username" 
                                className="l-username" 
                                placeholder='Email' 
                                onChange={this.handleEmailChange} 
                                value={values.email} 
                                required={true}
                            />
                            <input 
                                type="password" 
                                id="password_login" 
                                name="l-password" 
                                className="l-password" 
                                placeholder="Password"
                                onChange={this.handlePasswordChange} 
                                value={values.password} 
                                required={true}
                            />
                            <button 
                                onClick={this.handleSubmit}
                                type="submit" 
                                name="l-submit" 
                                className="l-submit">Login
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
            </Container>
        );
    }
};

export default Login;
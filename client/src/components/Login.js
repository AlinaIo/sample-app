import React from 'react';
import {observer} from 'mobx-react';
import { Button, Input, Container, Header } from 'semantic-ui-react';

export default observer(class Login extends React.Component {
    componentWillUnmount() {
        this.props.authStore.reset();
    }

    onSubmit = () => {
        const { email, password } = this;
        console.log(email);
        console.log(password);
    }

    onChange = e => {
        const { name, value } = e.target;
        this[name] = value;
    }

    render() {
        const { email, password } = this;
        return (
            <Container text>
                <Header as='h2'>Login</Header>
                <Input 
                    name='email' 
                    onChange={this.onChange} 
                    value={email} 
                    placeholder='Email' 
                    fluid 
                />
                <Input
                    name="password"
                    onChange={this.onChange} 
                    value={password} 
                    placeholder='Password' 
                    fluid 
                />
                <Button onClick={this.onSubmit}>Submit</Button>
            </Container>
        );
    }
});
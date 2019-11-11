import React, {useState} from 'react';
import LoginButton from "./LoginButton";
import {
    Form,
    Grid,
    Header,
    Message,
    Segment,

} from 'semantic-ui-react';


const Login =() => {

    const [userNameLogin, setUserName]= useState();
    const [passwordLogin, setPassword]= useState();

    const handleUserOnChange = (e, data) => {
        console.log(data.value);
        setUserName(data.value);
    }

    const handlePasswordOnChange = (e, data) => {
        console.log(data.value);
        setPassword(data.value);
    }

    return(
        <Grid centered columns={2}>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                    Login
                </Header>
                <Segment>
                    <Form size="large">
                        <Form.Input
                            id="user"
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="userID"
                           onChange={handleUserOnChange}
                            />
                        <Form.Input
                            fluid
                            id="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                            onChange={handlePasswordOnChange}
                        />
                    <LoginButton username={userNameLogin} password={passwordLogin} />
                    </Form>
                </Segment>
                <Message>
                    Not registered yet? <a href="#">Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    );

}
export default Login;
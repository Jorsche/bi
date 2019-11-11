import {Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import LoginButton from "./Login/LoginButton";
import React from "react";


const Test=()=>{
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
                        placeholder="Email address"
                    />
                    <Form.Input
                        fluid
                        id="password"
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                    />
                </Form>
            </Segment>
            <Message>
                Not registered yet? <a href="#">Sign Up</a>
            </Message>
        </Grid.Column>
    </Grid>
);


}

export default Test;
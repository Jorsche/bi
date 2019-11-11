import {Button} from "semantic-ui-react";
import React from "react";
import {useHistory} from 'react-router-dom';


const LoginButton=({username,password})=> {
    let history=useHistory();


    console.log(username);
    console.log(password);

    const onSubmit = () => {
        console.log("CLicked");
            if (username === "dsta" && password === "dsta") {
                console.log("dstaIN");
                history.push("DSTA_main/");
            }
            else if(username==="abc" && password==="abc"){
                history.push("Contractor_main/")
            }
    }
        return (
            <div>
            <Button color="blue" fluid size="large"  onClick={onSubmit}>
                Login
            </Button>
            </div>
        );
    }

export default LoginButton;
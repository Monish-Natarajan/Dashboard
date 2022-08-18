
// import logo from './logo.svg';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import background from "./space.png";
import loginLogo from "./launchpad.png";
import TextAnimation from './TextAnimation';
import Card from '@mui/material/Card';
import { useState } from "react";
import Box from '@mui/material/Box';

const myStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    marginTop: '-0px',
    fontSize: '50px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden'
};


export default function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "admin",
            password: "pass"
        },
        {
            username: "user",
            password: "pass"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">

            <form onSubmit={handleSubmit}>

                <div className="input-container">
                    <TextField type="text" name="uname" label="Username" required></TextField>
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <TextField name="pass" label="Password" type={'password'} required></TextField>
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <Button variant="primary" type="submit" endIcon={<RocketLaunchTwoToneIcon />}>Login  </Button>
                </div>
                <hr
                    style={{
                        background: 'lime',
                        color: 'lime',
                        borderColor: 'lime',
                        height: '1px',
                    }}
                />
                <div className='title' style={{"fontSize": "medium"}}>Forgot Password?</div>
            </form>
        </div>

    );
    return (
        <>

            <div className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2' style={myStyle}  >
                <Grid
                    container
                    spacing={1}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <div className="MuiBox-root ">
                            <div className="MuiTypography-root MuiTypography-h2" style={{ "font-weight": "700", "color": "rgb(201 200 216)" }}>KGP Launchpad login</div>
                        </div>
                    </Grid>
                    {/* <Card> */}
                    <div className="app">
                        <div className="login-form" style={{ "borderRadius": "8px" }}>
                            <div className="button-container">
                                <img src={loginLogo} alt="loginLogo" height={80} />
                            </div>
                            <div className="title">Sign In</div>
                            {isSubmitted ? <div>Logged in!</div> : renderForm}
                        </div>
                        {/* </Card> */}
                    </div>
                </Grid>
            </div>
        </>
    )
}

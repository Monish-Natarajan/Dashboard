// const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );



























// <Grid
//             container
//             spacing={1}
//             direction={'column'}
//             justify={'center'}
//             alignItems={'center'}
//         >
//             <Grid item xs={12} >
//                 <div className="MuiBox-root " >
//                     <div className="MuiTypography-root MuiTypography-h2" style={{ "font-weight": "300", "color": "#150f70" }}>KGP Launchpad login</div>
//                 </div>
//             </Grid>
//             <Grid item xs={12} >
//                 <TextField type="text" name="uname" label="Username"></TextField>
//                 {renderErrorMessage("uname")}
//             </Grid>
//             <Grid item xs={12}>
//                 <TextField label="Password" type={'password'}></TextField>
//                 {renderErrorMessage("pass")}
//             </Grid>
//             <Grid item xs={10}>
//                 <Button variant="primary" type="submit" endIcon={<RocketLaunchTwoToneIcon />}>Login  </Button>
//             </Grid>
//         </Grid>




















// // login


// // import logo from './logo.svg';
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// // import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
// import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
// import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
// import background from "./image.png";
// import TextAnimation from './TextAnimation';
// import Card from '@mui/material/Card';
// import { useState } from "react";


// const myStyle = {
//     backgroundImage: `url(${background})`,
//     height: '100vh',
//     marginTop: '-0px',
//     fontSize: '50px',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
// };


// export default function Login() {
//     const [errorMessages, setErrorMessages] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     // User Login info
//     const database = [
//         {
//             username: "user1",
//             password: "pass1"
//         },
//         {
//             username: "user2",
//             password: "pass2"
//         }
//     ];

//     const errors = {
//         uname: "invalid username",
//         pass: "invalid password"
//     };

//     const handleSubmit = (event) => {
//         //Prevent page reload
//         event.preventDefault();

//         var { uname, pass } = document.forms[0];

//         // Find user login info
//         const userData = database.find((user) => user.username === uname.value);

//         // Compare user info
//         if (userData) {
//             if (userData.password !== pass.value) {
//                 // Invalid password
//                 setErrorMessages({ name: "pass", message: errors.pass });
//             } else {
//                 setIsSubmitted(true);
//             }
//         } else {
//             // Username not found
//             setErrorMessages({ name: "uname", message: errors.uname });
//         }
//     };

//     // Generate JSX code for error message
//     const renderErrorMessage = (name) =>
//         name === errorMessages.name && (
//             <div className="error">{errorMessages.message}</div>
//         );

//     // JSX code for login form
//     const renderForm = (

//         <div className="form">
//             <form onSubmit={handleSubmit}>
//                 <div className="input-container">
//                     <TextField type="text" name="uname" label="Username" required></TextField>
//                     {renderErrorMessage("uname")}
//                 </div>
//                 <div className="input-container">
//                     <TextField name="pass" label="Password" type={'password'} required></TextField>
//                     {renderErrorMessage("pass")}
//                 </div>
//                 <div className="button-container">
//                     <Button variant="primary" type="submit" endIcon={<RocketLaunchTwoToneIcon />}>Login  </Button>
//                 </div>
//             </form>
//         </div>
//     );
//     return (
//         <>

//             <div className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2' style={myStyle}  >
//                 <Grid
//                     container
//                     spacing={1}
//                     direction={'column'}
//                     justify={'center'}
//                     alignItems={'center'}
//                 >
//                     <Grid item xs={12}>
//                         <div className="MuiBox-root ">
//                             <div className="MuiTypography-root MuiTypography-h2" style={{ "font-weight": "300", "color": "#150f70" }}>KGP Launchpad login</div>
//                         </div>
//                     </Grid>
//                 <div style={{ padding: 30 }}>
//                     {/* <Card> */}
//                     <div className="app">
//                         <div className="login-form">
//                             <div className="title">Sign In</div>
//                             {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//                         </div>
//                     </div>
//                     {/* </Card> */}
//                 </div>
//                 </Grid>
//             </div>
//         </>
//     )
// }

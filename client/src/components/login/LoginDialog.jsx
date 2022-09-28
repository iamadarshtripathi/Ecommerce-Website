import { useState } from 'react';
import React from "react";
import {  Dialog,  TextField,  Box,  Typography,  Button,  styled,} from "@mui/material";

import { authenticateSignup } from '../../service/api';

const Components = styled(Box)`
height: 70vh;
width: 90vh;
`;


const Image = styled(Box)`
  background: #4d4d4d url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  height: 82%;
  width: 28%;
  padding: 45px 35px;
  & > p, & > h5 {
    color: #FFFFFF;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div, & > button, & > p {
    margin-top: 20px;
  }
`

const LoginButton = styled(Button)`
  text-transform: none;
  background: #ff9900;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #287460;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;


const CreateAccount = styled(Typography)`
text-align: center;
color: #2874f0;
font-weight: 600;
font-size: 14px;
cursor: pointer;
`;

const accountIntitialValues = {
  login: {
      view: 'login' , 
      heading: 'Login' , 
      subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  }, 
  signup: {
      view: 'signup',
      heading: "Looks like you're new here!",
      subHeading: 'sign up with your mobile number to get started'
  }
}

const signupIntialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
}

const LoginDialog = ({ open, setOpen }) => {
  
  const [account , toggleAccount] = useState(accountIntitialValues.login);
  const [signup , setSignup] = useState(signupIntialValues);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountIntitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountIntitialValues.signup);
  }

  const onInputChange = (e) => {
    setSignup({ ...signup , [e.target.name]: e.target.value });
  }

  const signupUser = async () => 
  {
      let response = await authenticateSignup(signup);
  }



  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset'}}}>
      <Components>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography varient='h5'>{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
          </Image>
          { 
            account.view === 'login' ?
          <Wrapper>
            <TextField varient="standard" label="Enter Email/Mobile number" />
            <TextField varient="standard" label="Enter Password" />
            <Text>By continuing , you agree to FlipKart's Terms of Use and Privacy Policy.</Text>
            <LoginButton>Login</LoginButton>
            <Typography style={{ textAlign: 'center'}}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
          </Wrapper>
          :
          <Wrapper>
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="Enter Firstname" />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="Enter Lastname" />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter Username" />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label="Enter Email" />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone" />
            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>            
          </Wrapper>
          }
        </Box>
      </Components>
    </Dialog>
  );
};

export default LoginDialog;

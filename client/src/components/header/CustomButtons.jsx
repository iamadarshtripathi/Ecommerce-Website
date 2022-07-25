import React from 'react';
import {Box , Button , Typography , styled} from '@mui/material';
import  {ShoppingCart}  from '@mui/icons-material';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 1% 0 auto;
    & > button, & > p {
        margin-right: 40px;
        font-size: 14px;
    }
`;

const Container = styled(Box)`
    display: flex;
`;

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #ffffff;
    text-transfoorm: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
`;

const CustomButtons = () => {
  return (
    <Wrapper>
        <LoginButton varient="contained">Login</LoginButton>

        <Typography style={{marginTop: 3, width: 135 }}>Become a Seller</Typography>
        <Typography style={{marginTop: 3}}>More</Typography>

        <Container>
            <ShoppingCart/>
            <Typography>cart</Typography>
        </Container>
    </Wrapper>
  )
}

export default CustomButtons;
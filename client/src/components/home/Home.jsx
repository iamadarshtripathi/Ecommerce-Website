import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";

import { Box , styled } from '@mui/material';

const Components = styled(Box)`
    padding: 10px;
    background: #F2F2F2;

`

const Home = () => {
  return (
    <>
      <NavBar />
      <Components>
        <Banner />
      </Components>
    </>
  );
};

export default Home;

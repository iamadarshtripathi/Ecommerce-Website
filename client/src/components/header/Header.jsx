import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import React from "react";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyleHeader = styled(AppBar)`
  background: #333333;
  height: 60px;
`;

const CustomButtonWrapper = styled(Box)`
    margin: 0 6% 0 auto;
`;

const MainHeading = styled(Typography)`
    font-size: 45px;
    color: #b3fff0;
    font-family: Copperplate , Fantasy;
    margin-left: 5px;
`;

const Header = () => {
  const logoURL =
    "https://blogs.nottingham.ac.uk/studentlife/files/2020/07/edit-1105049_960_720.png";

  return (
    <StyleHeader>
      <Toolbar style={{minHeight: 60 }}> 
        <Box>
          <img src={logoURL} alt="logo" style={{ width: 45 }} />
        </Box>
        <MainHeading>ADDES 24</MainHeading>
        <Search />
        <CustomButtonWrapper>
            <CustomButtons/>
        </CustomButtonWrapper>
      </Toolbar>
    </StyleHeader>
  );
};

export default Header;

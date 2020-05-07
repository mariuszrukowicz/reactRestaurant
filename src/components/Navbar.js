import { Box, Heading, Text } from 'gestalt';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icon/Przezroczysty.png';

const Navbar = () => (
  <Box
    height={70}
    color="lightGray"
    display="flex"
    alignItems="center"
    justifyContent="around"
    padding={1}
    shape="roundedBottom"
  >
    <NavLink to="/signin">
      <Text size="xl">Sign In </Text>
    </NavLink>

    <NavLink to="/">
      <Box>
        <Heading>
          <image src={logo} />
        </Heading>
      </Box>
    </NavLink>

    <NavLink to="/sign Up">
      <Text size="xl">Sign In </Text>
    </NavLink>
  </Box>
);
export default Navbar;

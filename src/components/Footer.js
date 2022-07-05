import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#"
    alignItems="center"
    >
      <Stack
      flexDirection="row"
        gap="40px"
        px="40px"
        pt="24px"
        pb="20px"
        justifyContent="center"
        alignItems="center"
      >
        <img src={Logo} alt="Gym Logo" width="100px" height="100px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Gym Club
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

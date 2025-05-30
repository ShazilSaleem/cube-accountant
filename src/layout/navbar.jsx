import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import AppLogo from "../assets/appLogo.jsx";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {


  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: "unset !important",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Toolbar className="navbar-toolbar">
        <AppLogo style={{ height: "30px" }} />

        <Box sx={{ display: "flex", gap: "30px" }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            className="navbar-button"
            sx={{
              fontFamily: "Urbanist, sans-serif !important",
              fontSize: "16px",
              textTransform: "none",
              color: "black !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#A61E20 !important",
              },
              "&.active": {
                color: "#A61E20 !important", // Change active color to #A61E20
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/services"
            className="navbar-button"
            sx={{
              fontFamily: "Urbanist, sans-serif !important",
              fontSize: "16px",
              textTransform: "none",
              color: "black !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#A61E20 !important",
              },
              "&.active": {
                color: "#A61E20 !important", // Change active color to #A61E20
              },
            }}
          >
            Services
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/about"
            className="navbar-button"
            sx={{
              fontFamily: "Urbanist, sans-serif !important",
              fontSize: "16px",
              textTransform: "none",
              color: "black !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#A61E20 !important",
              },
              "&.active": {
                color: "#A61E20 !important", // Change active color to #A61E20
              },
            }}
          >
            About Us
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/contact"
            className="navbar-button"
            sx={{
              fontFamily: "Urbanist, sans-serif !important",
              fontSize: "16px",
              textTransform: "none",
              color: "black !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#A61E20 !important",
              },
              "&.active": {
                color: "#A61E20 !important", // Change active color to #A61E20
              },
            }}
          >
            Contact Us
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/login"
            className="navbar-button"
            sx={{
              fontFamily: "Urbanist, sans-serif !important",
              fontSize: "16px",
              textTransform: "none",
              color: "black !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#A61E20 !important",
              },
              "&.active": {
                color: "#A61E20 !important", // Change active color to #A61E20
              },
            }}
          >
            Log In
          </Button>
        </Box>
        <Box>
          <Button
            color="inherit"
            component={NavLink}
            to="/partners"
            className="navbar-button"
            sx={{
              fontFamily: "Urbanist, sans-serif !important",
              textTransform: "none",
              color: "#A61E20 !important",
              fontSize: "16px",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#A61E20 !important",
              },
              "&.active": {
                color: "#A61E20 !important", // Change active color to #A61E20
              },
            }}
          >
            Partners
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/academy"
            className="navbar-button"
            sx={{
              fontFamily: "Urbanist, sans-serif !important",
              fontSize: "16px",

              textTransform: "none",
              color: "#2B82C0 !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#A61E20 !important",
              },
              "&.active": {
                color: "#A61E20 !important", // Change active color to #A61E20
              },
            }}
          >
            Academy
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

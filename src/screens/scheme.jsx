import React, { useState } from "react";
import Hero from "../layout/hero";
import Footer from "../layout/footer";
import {
  Box,
  Button,
  Typography,
  Grid,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Podcast from "../assets/podcast.png";
import Dollar from "../assets/dollar.jsx";
import LeftArrow from "../assets/leftArrow.jsx";
import RightArrow from "../assets/rightArrow.jsx";
import Mic from "../assets/mic.jsx";
import Message from "../assets/message.jsx";
import BoxIcon from "../assets/box.jsx";
import Portfolio from "../assets/portfolio.jsx";
import Commitment from "../assets/commitment.jsx";
import Skills from "../assets/skills.jsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BigArrow from "../assets/bigArrow.jsx";
import useMediaQuery from "../hooks/useMediaQuery.js";
import BenefitCareousel from "../layout/benefitCareousel";
import TabImage from "../assets/tabImage.png";
import { Star, Shield, FlashOn } from "@mui/icons-material"; // Icons

function Scheme() {
  const isDesktop = useMediaQuery("(max-width: 1496px)");
const benefits = [
  {
    icon: <Star sx={{ color: "#A61E20" }} />,
    title: "Cube Portal",
    description:
      "Gorgeous, high-quality design system for mobile, tablet & desktop devices a few reasons",
  },
  {
    icon: <Shield sx={{ color: "#A61E20" }} />,
    title: "Cube App",
    description:
      "Gorgeous, high-quality design system for mobile, tablet & desktop devices a few reasons",
  },
  {
    icon: <FlashOn sx={{ color: "#A61E20" }} />,
    title: "Cube Videos",
    description:
      "Gorgeous, high-quality design system for mobile, tablet & desktop devices a few reasons",
  },
];
  return (
    <div>
      <Hero
        heading="Let’s Connect and Collaborate"
        paragraph="Have questions or need expert advice? Our team is here to guide you through every financial challenge. Reach out today, and let’s build a successful future together."
        button="Contact us now"
      />

      <BenefitCareousel />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "150px",
          gap: 8,
          marginTop:"100px"
        }}
      >
        {/* Left Section - Text */}
        <Box sx={{ maxWidth: 400 }}>
          {/* Tag */}
          <Box
            sx={{
              backgroundColor: "#A61E20",
              color: "white",
              px: 2,
              py: 0.5,
              borderRadius: 2,
              fontSize: 12,
              fontWeight: "bold",
              padding: "10px",
              display: "inline-block",
              fontFamily: "urbanist, sans-serif",
            }}
          >
            DIGITAL PROMOTION
          </Box>

          {/* Heading */}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mt: 2, fontFamily: "urbanist, sans-serif" }}
          >
            Client <br /> Benefits
          </Typography>

          {/* Benefits List */}
          <List>
            {benefits.map((item, index) => (
              <ListItem key={index} sx={{ alignItems: "flex-start", pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      fontWeight="bold"
                      sx={{ fontFamily: "urbanist, sans-serif" }}
                    >
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{ color: "#555", fontFamily: "urbanist, sans-serif" }}
                    >
                      {item.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>

          {/* Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#A61E20",
              color: "white",
              borderRadius: 2,
              mt: 2,
              px: 3,
              "&:hover": {
                backgroundColor: "#8E1A1C ",
              },
            }}
          >
            Login Now →
          </Button>
        </Box>

        {/* Right Section - Image */}
        <Box component="img" src={TabImage} alt="Dashboard UI" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 25, px: 30, marginTop:"130px", width:"100%", marginBottom:"150px" }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#A61E20",
                    fontFamily: "Urbanist, sans-serif",
                  }}
                >
                  Client
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", fontFamily: "Urbanist, sans-serif", width:"250px" }}
                >
                  Satisfaction Score
                </Typography>
              </Box>
      
              {/* Stats Section */}
              <Grid container spacing={12} alignItems="center">
                {/* First Stat */}
                <Grid item>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", fontFamily: "Urbanist, sans-serif" }}
                  >
                    500 +
                  </Typography>
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "14px",
                      fontFamily: "Urbanist, sans-serif",
                    }}
                  >
                    Efficient Schedules <br /> Created
                  </Typography>
                </Grid>
      
                <Grid item>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", fontFamily: "Urbanist, sans-serif" }}
                  >
                    120 M
                  </Typography>
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "14px",
                      fontFamily: "Urbanist, sans-serif",
                    }}
                  >
                    Tasks Organized and <br /> Completed
                  </Typography>
                </Grid>
      
                {/* Third Stat */}
                <Grid item>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", fontFamily: "Urbanist, sans-serif" }}
                  >
                    98 %
                  </Typography>
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "14px",
                      fontFamily: "Urbanist, sans-serif",
                    }}
                  >
                    Exceptional User <br /> Satisfaction Rate
                  </Typography>
                </Grid>
              </Grid>
            </Box>
      <Footer />
    </div>
  );
}

export default Scheme;

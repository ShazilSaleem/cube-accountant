import React from 'react'
import Hero from '../layout/hero'
import Footer from '../layout/footer'
import Arrow from "../assets/arrow.jsx";
import Map from "../assets/map.png";
import {Box, Typography, TextField, MenuItem, Button, Paper} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
import Google from "../assets/google.jsx"
import Linkedin from "../assets/linkedin.jsx"
import Facebook from "../assets/facebook.jsx"
import Twitter from "../assets/twitter.jsx"
import RactnagleBg from "../assets/rectanglebg.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PopUp from "../assets/popUp.jsx";
import SwiperHero from "../layout/swiperHero.jsx";

function ContactUs() {
  return (
    <div>
      <div>
        <SwiperHero
          heading="Let’s Connect and Collaborate"
          paragraph="Have questions or need expert advice? Our team is here to guide you through every financial challenge. Reach out today, and let’s build a successful future together."
          button="Contact Us Now"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            flexDirection: "column",
            marginLeft: "50px",
            marginBottom: "25px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Urbanist, sans-serif",
              gap: "15px",
              fontSize: "24px",
              color: "#821BC3",
              marginLeft: "0px",
            }}
          >
            <Arrow sx={{ color: "red", marginRight: 1 }} />
            <Typography sx={{ color: "#A61E20", fontSize: "20px" }}>
              Contact Info
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: "44px",
              fontWeight: "bold",
              fontFamily: "Urbanist, sans-serif",
            }}
          >
            Our Contact Details
          </Typography>
        </div>
        <img
          src={Map}
          alt="map"
          style={{
            height: "auto",
            maxWidth: "1220px",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <Box sx={{ textAlign: "center" }}>
        <Grid container justifyContent="center">
          {/* Office Location */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  backgroundColor: "#A61E20",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon sx={{ color: "white" }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginTop: 1,
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                Office Location
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Urbanist, sans-serif" }}
              >
                Suite Twelve, First Floor, Parkway <br /> Two, Manchester, M14
                7HR
              </Typography>
            </Box>
          </Grid>

          {/* Phone Number */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  backgroundColor: "#A61E20",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PhoneIcon sx={{ color: "white" }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginTop: 1,
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                Phone Number
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Urbanist, sans-serif" }}
              >
                Call: +44 0161 55 22 666 <br />
                <strong>WhatsApp:</strong> +44 0751 33 20 300
              </Typography>
            </Box>
          </Grid>

          {/* Email */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  backgroundColor: "#A61E20",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EmailIcon sx={{ color: "white" }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginTop: 1,
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                Email
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Urbanist, sans-serif" }}
              >
                contact@cubeaccountants.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "55px",
          gap: "20px",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontFamily: "Urbanist, sans-serif" }}
        >
          Follow us via
        </Typography>
        <Google />
        <Linkedin />
        <Facebook />
        <Twitter />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "684px",
          marginTop: "150px",
          marginLeft: "150px",
          marginRight: "150px",
          borderRadius: "20px",
          marginBottom: "200px",
          backgroundImage: `url(${RactnagleBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#161C2D",
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "1200px",
            p: 4,
            borderRadius: 2,
            justifyContent: "center",
            alignItems: "center",
            gap: 30,
          }}
        >
          <Box sx={{ flex: 1, color: "white", pr: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "#282E3D",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PopUp />
              </Box>
            </Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ lineHeight: 1.5, fontFamily: "Urbanist,sans-serif" }}
            >
              Get a free consultancy <br /> from our expert right now!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 2,
                fontFamily: "Urbanist,sans-serif",
                fontSize: "19px",
                opacity: "0.7",
              }}
            >
              With lots of unique blocks, you can easily build <br />a page
              without coding. Build your next landing
              <br /> page so quickly with Albino.
            </Typography>
          </Box>

          <Paper sx={{ p: 4, borderRadius: 2, width: 350 }}>
            <TextField
              fullWidth
              label="Name"
              placeholder="i.e. John Doe"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              placeholder="i.e. john@mail.com"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Phone"
              placeholder="i.e. 123-456-7890"
              margin="normal"
            />
            <TextField
              fullWidth
              select
              label="Which service do you need?"
              margin="normal"
              defaultValue=""
            >
              <MenuItem value="design">Design</MenuItem>
              <MenuItem value="development">Development</MenuItem>
              <MenuItem value="marketing">Marketing</MenuItem>
            </TextField>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#A61E20",
                mt: 2,
                fontFamily: "urbanist, sans-serif",
                padding: "18px",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#8E1A1C ",
                },
              }}
            >
              Get Free Consultancy
            </Button>
          </Paper>
        </Box>
      </Box>

      <Footer />
    </div>
  );
}

export default ContactUs;
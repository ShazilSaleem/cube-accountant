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
            marginLeft: "220px",
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
              color: "#A61E20",
            }}
          >
            <Arrow sx={{ color: "red", marginRight: 1 }} />
            Contact Info
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
        <Box sx={{ py: 8 }}>
          <Grid
            container
            spacing={5}
            alignItems="center"
            justifyContent="center"
            direction={{ xs: "column", md: "row" }}
          >
            <Grid item xs={12} md={6}>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={12}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        backgroundColor: "#A61E20",
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto",
                        mb: 1,
                      }}
                    >
                      <LocationOnIcon sx={{ color: "white" }} />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontFamily="Urbanist, sans-serif"
                    >
                      Office Location
                    </Typography>
                    <Typography fontFamily="Urbanist, sans-serif" color="#555">
                      Suite Twelve, First Floor, Parkway <br /> Two, Manchester,
                      M14 7HR
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={12}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        backgroundColor: "#A61E20",
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto",
                        mb: 1,
                      }}
                    >
                      <PhoneIcon sx={{ color: "white" }} />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontFamily="Urbanist, sans-serif"
                    >
                      Phone Number
                    </Typography>
                    <Typography fontFamily="Urbanist, sans-serif" color="#555">
                      Call: +44 0161 55 22 666 <br />
                      <strong>WhatsApp:</strong> +44 0751 33 20 300
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={12}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        backgroundColor: "#A61E20",
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto",
                        mb: 1,
                      }}
                    >
                      <EmailIcon sx={{ color: "white" }} />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontFamily="Urbanist, sans-serif"
                    >
                      Email
                    </Typography>
                    <Typography fontFamily="Urbanist, sans-serif" color="#555">
                      contact@cubeaccountants.com
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <img
                  src={Map}
                  alt="map"
                  style={{
                    width: "600px",
                    height: "450px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
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
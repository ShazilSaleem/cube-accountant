import React, { useState, useRef } from "react";
import Hero from "../layout/hero";
import Footer from "../layout/footer";
import BenefitsCarousel from "../layout/benefitCareousel"; // Import the new component
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
  Paper,
  TextField,
  Stack,
  MenuItem,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import Podcast1 from "../assets/podcast.png";
import RactnagleBg from "../assets/rectanglebg.png";
import Before from "../assets/before.jsx"
import After from "../assets/after.jsx";
import PopUp from "../assets/popUp.jsx";
import useMediaQuery from "../hooks/useMediaQuery.js";
import TabImage from "../assets/tabImage.png";
import Mobile from "../assets/mobile.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Wave from "../assets/wave.jsx";
import Wave2 from "../assets/wave2.jsx";
import AccountsIcon from "../assets/accounts.jsx";
import AuditIcon  from "../assets/audit.jsx";
import AdvisoryIcon from "../assets/advisory.jsx";
import PayrollIcon from "../assets/payroll.jsx";
import HeadphonesIcon from "../assets/headphones.jsx";
import ChartIcon from "../assets/chartIcon.jsx";
import BuildingIcon from "../assets/buildingIcon.jsx";
import LaptopIcon from "../assets/laptopIcon.jsx"
import FolderIcon from "../assets/folderIcon.jsx"
import RotateIcon from "../assets/rotateIcon.jsx";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The Home component renders the main home page of the application, which includes
 * the navigation bar, hero section, features section, and footer.
 *
 * @returns {React.ReactElement} The JSX element representing the home page.
 */
/*******  1e3466ea-5533-48b8-bc30-dd8113b7145e  *******/
function Home() {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(max-width: 1497px)");
  const serviceIcons = {
    Accounts: <AccountsIcon />,
    Audit: <AuditIcon />,
    "Business Advisory": <AdvisoryIcon />,
    Payroll: <PayrollIcon />,
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // 30% of the element should be visible
  });

  const services = [
    {
      title: "Healthcare",
      icon: <HeadphonesIcon />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
    },
    {
      title: "Legal and Professional",
      icon: <ChartIcon />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
    },
    {
      title: "Property and Construction",
      icon: <BuildingIcon />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
    },
    {
      title: "Contractors and Freelancers",
      icon: <LaptopIcon />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
    },
    {
      title: "Transport",
      icon: <FolderIcon />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
    },
    {
      title: "Catering",
      icon: <RotateIcon />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
    },
  ];
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "100px",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginLeft: "100px",
            width: "500px",
          }}
        >
          <Typography
            sx={{
              fontSize: "45px",
              fontFamily: "Urbanist, sans-serif",
              fontWeight: "bold",
              lineHeight: "1.2",
            }}
          >
            Your Trusted Partner in <br />{" "}
            <span style={{ color: "#A61E20" }}>Accounting Solutions</span>
          </Typography>
          <Typography
            sx={{ color: "#212121", fontFamily: "Urbanist, sans-serif" }}
          >
            Cube Accountants offers a personal and professional <br />
            service, advising clients on a range of financial
            <br /> solutions.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#A61E20",
              fontFamily: "poppins",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              "&:hover": {
                backgroundColor: "#8E1A1C ",
              },
            }}
          >
            Read More
          </Button>
        </Box>
        <Box sx={{ position: "relative", display: "inline-block" }}>
          <img
            src={TabImage}
            alt="tab image"
            style={{ width: "100%", display: "block" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "220px",
          marginBottom: "200px",
          position: "relative",
        }}
      >
        <Wave
          style={{
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
          }}
        />
        <Wave2
          style={{
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%) ",
            width: "100%",
          }}
        />
        <Typography
          sx={{
            display: "block",
            textAlign: "left",
            fontFamily: "Urbanist, sans-serif",
          }}
        >
          <span
            style={{
              fontSize: "45px",
              fontWeight: "bold",
              fontFamily: "Urbanist, sans-serif",
            }}
          >
            Our Mission
          </span>
          <br /> At Cube Accountants, we aim to simplify accounting for
          businesses and individuals by providing
          <br /> expert solutions tailored to your needs. Our mission is to help
          you navigate complex financial
          <br /> challenges with confidence and ease.
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: "#A61E20",
            fontFamily: "poppins",
            borderRadius: "8px",
            padding: "10px",
            width: "200px",
            marginTop: "50px",
            "&:hover": {
              backgroundColor: "#8E1A1C ",
            },
          }}
        >
          Learn More
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FBE9E9",
          padding: "50px",
          borderRadius: "12px",
          width: "80%",
          margin: "50px auto",
          flexWrap: "wrap",
          marginTop: "120px",
        }}
      >
        {/* Left Side (Text Content) */}
        <Box sx={{ flex: 1, padding: "20px", minWidth: "300px" }}>
          <Typography
            sx={{
              color: "#A61E20",
              fontWeight: "bold",
              fontFamily: "Urbanist, sans-serif",
              marginBottom: "20px",
            }}
          >
            Transforming Teamwork
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: "10px",
              lineHeight: "1.2",
              fontFamily: "Urbanist, sans-serif",
            }}
          >
            We offer tailor <br />
            made services <br /> to you
          </Typography>
          <Typography
            sx={{
              color: "#555",
              lineHeight: "1.5",
              fontFamily: "Urbanist, sans-serif",
              width: "70%",
            }}
          >
            At Cube Accountants, we offer a range of services to suit our
            clients' needs. What makes our services unique is the ability to
            communicate effectively with our clients to understand their needs
            and build a solid relationship. We provide a service that is
            tailored to you.
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => {
              navigate("/services");
            }}
            sx={{
              backgroundColor: "#A61E20",
              borderRadius: "8px",
              padding: "13px",
              marginTop: "50px",
              fontFamily: "Urbanist, sans-serif",
              "&:hover": { backgroundColor: "#8E1A1C" },
            }}
          >
            Discover more
          </Button>
        </Box>

        {/* Right Side (Cards Section) */}
        <Grid container spacing={2} sx={{ flex: 1, minWidth: "300px" }}>
          {[
            {
              title: "Accounts",
              desc: "Enhance campaign planning, collaboration, and performance tracking.",
            },
            {
              title: "Audit",
              desc: "Streamline task assignment, progress tracking, and resource allocation.",
            },
            {
              title: "Business Advisory",
              desc: "Facilitate data-driven decision-making, scenario analysis, and goal tracking.",
            },
            {
              title: "Payroll",
              desc: "Optimize process automation, documentation, and communication.",
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      color: "#fff",
                      width: "50px",
                      height: "50px",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 auto 10px",
                    }}
                  >
                    {serviceIcons[service.title]}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Urbanist, sans-serif",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555",
                      fontSize: "14px",
                      fontFamily: "Urbanist, sans-serif",
                    }}
                  >
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: "60px 240px",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            top: -25,
            left: "8%",
            transform: "translateX(-50%)",
          }}
        >
          <Before />
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            top: 55,
            left: "93%",
            transform: "translateX(-50%)",
          }}
        >
          <After />
        </Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontFamily: "Urbanist, sans-serif", marginBottom: "10px" }}
        >
          Specialist in your sector
        </Typography>
        <Typography
          sx={{
            color: "#666",
            fontSize: "16px",
            fontFamily: "Urbanist, sans-serif",
            marginBottom: "40px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: "10px",
                  textAlign: "center",
                  padding: "20px",
                  boxShadow: "none",
                  border: "1px solid #eee",
                  "&:hover": {
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      margin: "0 auto 10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#A61E20",
                      fontSize: "40px",
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ fontFamily: "Urbanist, sans-serif" }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#555",
                      fontSize: "14px",
                      fontFamily: "Urbanist, sans-serif",
                      marginTop: "10px",
                    }}
                  >
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        ref={ref}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 25,
          px: 30,
          marginTop: "100px",
          width: "100%",
          marginBottom: "150px",
        }}
      >
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
            sx={{
              fontWeight: "bold",
              fontFamily: "Urbanist, sans-serif",
              width: "250px",
            }}
          >
            Satisfaction Score
          </Typography>
        </Box>

        <Grid container spacing={12} alignItems="center">
          <Grid item>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", fontFamily: "Urbanist, sans-serif" }}
            >
              {inView && <CountUp end={500} duration={2} />} +
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
              {inView && <CountUp end={120} duration={2} />} M
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

          <Grid item>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", fontFamily: "Urbanist, sans-serif" }}
            >
              {inView && <CountUp end={98} duration={2} />} %
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
      <BenefitsCarousel />
      <Footer />
    </div>
  );
}

export default Home;

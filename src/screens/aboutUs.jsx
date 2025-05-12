import React, { useRef, useState } from "react";
import Hero from "../layout/hero";
import Footer from "../layout/footer";
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import Arrow from "../assets/arrow.jsx";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import Phonix1 from "../assets/phonix.png";
import Phonix2 from "../assets/phonix2.png";
import Phonix3 from "../assets/phonix3.png";
import Phonix4 from "../assets/phonix4.png";
import Mission from "../assets/mission.png";
import ValuesImage from "../assets/valuesImage.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RedCube from "../assets/redCube.jsx";
import BlueCube from "../assets/blueCube.jsx";
import Before from "../assets/before.jsx";
import After from "../assets/after.jsx";
import useMediaQuery from "../hooks/useMediaQuery.js";
import SwiperHero from "../layout/swiperHero.jsx"
import Wave from "../assets/wave.jsx";
import Wave2 from "../assets/wave2.jsx";
import {
  CheckCircle,
  Build,
  GridView,
  Chat,
  Star,
  StarBorder,
  Person,
} from "@mui/icons-material"; // Icons

function AboutUs() {
  const teamRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const faqsRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(Phonix1);
  const isDesktop = useMediaQuery("(max-width: 1712px)");
  const isScreen = useMediaQuery("(max-width: 1496px)");
  const isTab = useMediaQuery("(max-width: 1240px)");
  const isMobile = useMediaQuery("(max-width: 848px)");
const values = [
  {
    title: "C - Communication",
    description:
      "Effortlessly tailor your website to match your unique vision.",
    icon: <Chat fontSize="large" sx={{ color: "#A61E20" }} />,
  },
  {
    title: "U - Understand",
    description:
      "Empower your project with our extensive and customizable collection.",
    icon: <GridView fontSize="large" sx={{ color: "#A61E20" }} />,
  },
  {
    title: "B - Build",
    description:
      "Effortlessly incorporate and integrate essential features seamlessly.",
    icon: <Build fontSize="large" sx={{ color: "#A61E20" }} />,
  },
  {
    title: "E - Engage",
    description:
      "Delight and captivate your customers with seamless and intuitive interfaces.",
    icon: <CheckCircle fontSize="large" sx={{ color: "#A61E20" }} />,
  },
];
const testimonials = [
  {
    name: "David Gillroy",
    feedback:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting",
    rating: 5,
  },
  {
    name: "Kyle Showdole",
    feedback:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting",
    rating: 4,
  },
  {
    name: "Milla Holland",
    feedback:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting",
    rating: 5,
  },
];
  return (
    <div>
      <SwiperHero
        heading="Our Story, Your Success"
        paragraph="Discover the people, values, and vision behind our firm"
        button="Explore More"
      />
      <Box sx={{ mx: "auto", p: 3 }}>
        <Box
          sx={{
            mt: 10,
            alignItems: "flex-start",
            position: "relative",
            marginLeft: "100px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 10,
              top: 115,
              left: "93%",
              transform: "translateX(-50%)",
              display: isDesktop ? "none" : "flex",
            }}
          >
            <After />
          </Box>
          <Typography
            color="#A61E20"
            sx={{
              fontFamily: "Urbanist, sans-serif ",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <Arrow />
              <Typography
                sx={{
                  color: "#A61E20",
                  fontFamily: "Urbanist, sans-serif ",
                  fontSize: "20px",
                }}
              >
                Our Team
              </Typography>
            </Box>
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: "Urbanist, sans-serif " }}
          >
            Our Fantastic Architecture
          </Typography>
          <Typography
            variant="body1"
            mx="auto"
            sx={{ fontFamily: "Urbanist, sans-serif " }}
            gutterBottom
          >
            A new dimension for the gold <br /> standard in architecture
          </Typography>
        </Box>
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: isScreen ? "column" : "row",
              mt: 5,
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
              marginLeft: "80px",
              marginRight: isDesktop ? "40px" : "180px",
              marginBottom: "200px",
            }}
          >
            <Box>
              <img
                src={selectedImage || Phonix2}
                alt="pic-1"
                style={{
                  borderRadius: "16px",
                  height: "700px",
                  width: "500px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    color: "#00194B",
                    fontSize: "32px",
                    fontWeight: "bold",
                    fontFamily: "poppins",
                    marginTop: isScreen ? "50px" : "0px",
                    marginBottom: "10px",
                  }}
                >
                  Divin Phonix
                </Typography>
                <Typography
                  sx={{
                    color: "#A61E20",
                    fontSize: "18px",
                    fontFamily: "poppins",
                    marginBottom: "10px",
                  }}
                >
                  Lead Engineer Of Building
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: 1.6,
                    textAlign: "left",
                    fontFamily: "poppins",
                  }}
                >
                  Can you make it pop can you make the font bigger? nor I know
                  somebody who can do this for a <br /> reasonable cost make it
                  sexy you are lucky to even be doing this for us can you pimp
                  this
                  <br />
                  powerpoint, need more geometry patterns can you punch up the
                  fun level on these icons. You <br /> might wanna give it.
                </Typography>
                <Box sx={{ display: "flex", gap: "30px", marginTop: "25px" }}>
                  <Facebook sx={{ color: "#A61E20" }} />
                  <Twitter sx={{ color: "#A61E20" }} />
                  <LinkedIn sx={{ color: "#A61E20" }} />
                  <Instagram sx={{ color: "#A61E20" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "50px",
                    justifyContent: { xs: "center", sm: "start" },
                    marginTop: isScreen ? "50px" : "140px",
                  }}
                >
                  {[Phonix2, Phonix3, Phonix4].map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail-${index}`}
                      style={{
                        cursor: "pointer",
                        border:
                          selectedImage === image
                            ? "1px solid #A61E20"
                            : "none",
                        borderRadius: "8px",
                      }}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "300px",
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
          textAlign: "center",
          px: 4,
          marginBottom: "200px",
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, fontFamily: "Urbanist, sans-serif" }}
        >
          Our{" "}
          <span
            style={{ color: "#A61E20", fontFamily: "Urbanist, sans-serif" }}
          >
            Values
          </span>
        </Typography>

        <Typography
          sx={{
            color: "#555",
            maxWidth: 600,
            mx: "auto",
            mb: 4,
            fontFamily: "Urbanist, sans-serif",
          }}
        >
          Designed to impeccably fulfill all your unique needs and requirements.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {values.map((value, index) => (
            <Box
              key={index}
              sx={{
                width: 250,
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: "#fdf8f7",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: "#fbe1e1",
                  mx: "auto",
                  mb: 2,
                }}
              >
                {value.icon}
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ fontFamily: "Urbanist, sans-serif" }}
              >
                {value.title}
              </Typography>
              <Typography
                sx={{
                  color: "#666",
                  fontSize: 14,
                  mt: 1,
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                {value.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#A61E201A",
          padding: "55px",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontFamily: "urbanist, sans-serif",
            fontWeight: "bold",
          }}
        >
          Get benefit from our other platforms
        </Typography>
        <Stack direction="row" spacing={15} marginTop={"25px"}>
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontFamily: "urbanist, sans-serif",
                fontSize: "28px",
                color: "#1A1A1A",
              }}
            >
              <RedCube />
              Accountants
            </Typography>
            <Box>
              <Typography
                sx={{
                  color: "#767676",
                  fontFamily: "urbanist, sans-serif",
                  fontSize: "16px",
                }}
              >
                Cube Partners connects businesses to <br />
                achieve extraordinary results. Let’s grow
                <br /> together.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontFamily: "urbanist, sans-serif",
                fontSize: "28px",
                color: "#1A1A1A",
              }}
            >
              <BlueCube />
              Academy
            </Typography>
            <Box>
              <Typography
                sx={{
                  color: "#767676",
                  fontFamily: "urbanist, sans-serif",
                  fontSize: "16px",
                }}
              >
                Cube Academy is a training provider which
                <br /> offers an opportunity to gain practical
                <br /> experience in finance
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          px: 4,
          backgroundColor: "white",
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontFamily: "urbanist, sans-serif" }}
        >
          Testimonials
        </Typography>

        <Typography
          sx={{
            color: "#555",
            maxWidth: 700,
            mx: "auto",
            mt: 1,
            mb: 4,
            fontFamily: "urbanist, sans-serif",
          }}
        >
          Join us to access resources, a supportive community, and growth
          opportunities with a leading accountancy firm.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                width: 280,
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: "#fdf2f0",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Avatar sx={{ bgcolor: "#f3e5e5", mx: "auto", mb: 1 }}>
                <Person sx={{ color: "#A61E20" }} />
              </Avatar>

              <Typography
                fontWeight="bold"
                sx={{ fontFamily: "urbanist, sans-serif" }}
              >
                {testimonial.name}
              </Typography>

              <Typography
                sx={{
                  color: "#333",
                  fontSize: 14,
                  mt: 1,
                  fontFamily: "urbanist, sans-serif",
                }}
              >
                {testimonial.feedback}
              </Typography>

              <Box sx={{ mt: 2 }}>
                {[...Array(5)].map((_, starIndex) =>
                  starIndex < testimonial.rating ? (
                    <Star key={starIndex} sx={{ color: "#1A1A1A" }} />
                  ) : (
                    <StarBorder key={starIndex} sx={{ color: "#1A1A1A" }} />
                  )
                )}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            width: "100%",
            height: 4,
            backgroundColor: "#e0e0e0",
            borderRadius: 2,
            mt: 4,
            mx: "auto",
            maxWidth: 200,
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "40%",
              height: "100%",
              backgroundColor: "#A61E20",
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isTab ? "column" : "row",
          alignItems: "center",
          padding: "100px",
          gap: "100px",
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: "bold",
            fontFamily: "Urbanist, sans-serif",
            marginBottom: "10px",
            whiteSpace: "nowrap",
            lineHeight: "1.1",
          }}
        >
          Your questions
          <br />{" "}
          <span
            style={{
              display: "inline-block",
              lineHeight: "1.1",
              color: "#A61E20",
            }}
          >
            answered
            <br />
          </span>
          <span
            style={{
              marginTop: "10px",
              fontSize: "14px",
              lineHeight: "1.2",
              display: "block",
              color: "#7A8089",
              fontWeight: "400",
            }}
          >
            Let’s do our best to answer your most frequently asked <br />{" "}
            questions.
          </span>
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            gap: "15px",
          }}
        >
          <Accordion
            sx={{ boxShadow: "none !important", borderRadius: "10px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#A61E20" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                boxShadow: "unset  !important",
                bgcolor: "#F5F5F5",
                height: "100px",
                borderRadius: "10px",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: " Urbanist, sans-serif",
                  fontWeight: "bold ",
                }}
              >
                What courses do you offer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ bgcolor: "#A61E20", color: "white", padding: "40px" }}
            >
              <Typography
                sx={{
                  marginTop: "5px",
                  marginBottom: "15px",
                  fontFamily: " Urbanist, sans-serif",
                }}
              >
                What are the requirements?
              </Typography>
              <Typography sx={{ fontFamily: " Urbanist, sans-serif" }}>
                Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt,
                Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die
                normale Anordnung von Buchstaben darstellt und somit nach
                lesbarer Sprache aussieht.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "unset !important",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#A61E20" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                boxShadow: "unset  !important",
                bgcolor: "#F5F5F5",
                height: "100px",
                borderRadius: "10px",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: " Urbanist, sans-serif",
                  fontWeight: "bold ",
                }}
              >
                How can I enroll in a course?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ bgcolor: "#A61E20", color: "white", padding: "40px" }}
            >
              <Typography
                sx={{
                  marginTop: "5px",
                  marginBottom: "15px",
                  fontFamily: " Urbanist, sans-serif",
                }}
              >
                What are the requirements?
              </Typography>
              <Typography sx={{ fontFamily: " Urbanist, sans-serif" }}>
                Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt,
                Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die
                normale Anordnung von Buchstaben darstellt und somit nach
                lesbarer Sprache aussieht.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "none !important",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#A61E20" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                boxShadow: "unset  !important",
                bgcolor: "#F5F5F5",
                height: "100px",
                borderRadius: "10px",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: " Urbanist, sans-serif",
                  fontWeight: "bold ",
                }}
              >
                Are your courses available online?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ bgcolor: "#A61E20", color: "white", padding: "40px" }}
            >
              <Typography
                sx={{
                  marginTop: "5px",
                  marginBottom: "15px",
                  fontFamily: " Urbanist, sans-serif",
                }}
              >
                What are the requirements?
              </Typography>
              <Typography sx={{ fontFamily: " Urbanist, sans-serif" }}>
                Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt,
                Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die
                normale Anordnung von Buchstaben darstellt und somit nach
                lesbarer Sprache aussieht.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "none !important",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#A61E20" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                boxShadow: "unset  !important",
                bgcolor: "#F5F5F5",
                height: "100px",
                borderRadius: "10px",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: " Urbanist, sans-serif",
                  fontWeight: "bold ",
                }}
              >
                Do you offer career support after course completion?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ bgcolor: "#A61E20", color: "white", padding: "40px" }}
            >
              <Typography
                sx={{
                  marginTop: "5px",
                  marginBottom: "15px",
                  fontFamily: " Urbanist, sans-serif",
                }}
              >
                What are the requirements?
              </Typography>
              <Typography sx={{ fontFamily: " Urbanist, sans-serif" }}>
                Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt,
                Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die
                normale Anordnung von Buchstaben darstellt und somit nach
                lesbarer Sprache aussieht.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "none !important",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#A61E20" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                boxShadow: "unset  !important",
                bgcolor: "#F5F5F5",
                height: "100px",
                borderRadius: "10px",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: " Urbanist, sans-serif",
                  fontWeight: "bold ",
                }}
              >
                What are the prerequisites for enrolling in your courses?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ bgcolor: "#A61E20", color: "white", padding: "40px" }}
            >
              <Typography
                sx={{
                  marginTop: "5px",
                  marginBottom: "15px",
                  fontFamily: " Urbanist, sans-serif",
                }}
              >
                What are the requirements?
              </Typography>
              <Typography sx={{ fontFamily: " Urbanist, sans-serif" }}>
                Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt,
                Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die
                normale Anordnung von Buchstaben darstellt und somit nach
                lesbarer Sprache aussieht.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
      <Footer />
    </div>
  );
}

export default AboutUs;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Arrow from "../assets/arrow.jsx";
import Question from "../assets/question.jsx";
import Family from "../assets/family.jsx";
import Medal from "../assets/medal.jsx"
import useMediaQuery from "../hooks/useMediaQuery.js";

export default () => {
  const isDesktop = useMediaQuery("(max-width: 1540px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
        bgcolor: "#F7E9E9",
        padding: "120px",
        gap: "40px",
      }}
    >
      <Box sx={{ width: "520px" }}>
        <Typography
          sx={{
            fontFamily: "urbanist, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#A61E20",
          }}
        >
          <Arrow />
          Client Benefits
        </Typography>

        <Typography
          sx={{
            fontFamily: "urbanist, sans-serif",
            fontWeight: "bold",
            fontSize: "42px",
            marginTop: "40px",
            marginBottom: "10px",
            lineHeight: 1.2,
          }}
        >
          What Partner <br /> with Cube <br /> Accountants?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            marginBottom: "60px",
            marginTop: "20px",
          }}
        >
          Read some of the benefits that our Partners enjoy by joining our
          network
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
          Explore All
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
        <Swiper spaceBetween={isDesktop ? 250 : 140} slidesPerView={3}>
          <SwiperSlide>
            <Card
              sx={{
                width: 360,
                borderRadius: "16px", // Rounded corners
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "40px",
                marginTop: "10px",
                height: "380px",
              }}
            >
              <CardContent>
                <Question />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontFamily: "Poppins, sans-serif", marginTop: "20px" }}
                >
                  Client Portal
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{
                    marginTop: "20px",
                    marginBottom: "25px",
                    fontFamily: "urbanist, sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  Access top-notch accounting services tailored to your business
                  needs.
                </Typography>
                <Typography sx={{ fontFamily: "urbanist, sans-serif" }}>
                  Check Here...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                width: 360,
                height: 380,
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "40px",
                marginTop: "10px",
                bgcolor: "#A61E20",
              }}
            >
              <CardContent>
                <Family />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    color: "white",
                    marginTop: "10px",
                  }}
                >
                  Client App
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "urbanist, sans-serif",
                    color: "white",
                    marginTop: "20px",
                    marginBottom: "25px",
                  }}
                >
                  Save valuable time and reduce costs with our streamlined
                  processes.
                </Typography>
                <Typography
                  sx={{ fontFamily: "urbanist, sans-serif", color: "white" }}
                >
                  Click Here...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                width: 360,
                borderRadius: "16px", // Rounded corners
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
                padding: "40px",
                marginTop: "10px",
                height: "380px",
              }}
            >
              <CardContent>
                <Medal />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontFamily: "Poppins, sans-serif", marginTop: "20px" }}
                >
                  Dedicated Support{" "}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{
                    marginTop: "20px",
                    marginBottom: "25px",
                    fontFamily: "urbanist, sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  Save valuable time and reduce costs with our streamlined
                  processes.
                </Typography>
                <Typography sx={{ fontFamily: "urbanist, sans-serif" }}>
                  Check Here...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                width: 360,
                borderRadius: "16px", // Rounded corners
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
                padding: "40px",
                marginTop: "10px",
                height: "380px",
              }}
            >
              <CardContent>
                <Medal />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontFamily: "Poppins, sans-serif", marginTop: "20px" }}
                >
                  Comprehensive Support{" "}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{
                    marginTop: "20px",
                    marginBottom: "25px",
                    fontFamily: "urbanist, sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  I want you to take it to the next level. Can you use a high
                  definition screenshot I really like the colour but can you
                  change
                </Typography>
                <Typography sx={{ fontFamily: "urbanist, sans-serif" }}>
                  Check Here...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

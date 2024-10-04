"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Cover from "./Cover";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Cover>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              minHeight: "100%",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  backgroundColor: theme.palette.text.secondary,
                  padding: "2px 4px",
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                  display: "inline",
                  textAlign: "center",
                }}
              >
                Full-Stack Developer
              </Typography>

              <Typography variant={isMobile ? "h3" : "h2"} sx={{ pt: "20px" }}>
                Talk is cheap.
                <br />
                Show me the code.
              </Typography>

              <Typography variant="body1" sx={{ pt: "30px" }}>
                I design and code beautifully simple things, and I love what I
                do.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  pt: "50px",
                  textDecoration: "underline",
                  textTransform: "uppercase",
                  color: theme.palette.text.secondary,
                  letterSpacing: "1px",
                }}
              >
                let's chat!
              </Typography>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      pr: "20px",
                    }}
                  >
                    2
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "uppercase",
                    }}
                  >
                    Years <br /> Experience
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      pr: "20px",
                    }}
                  >
                    20
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "uppercase",
                    }}
                  >
                    Projects <br />
                    completed
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={"/images/george.png"}
              alt="George Mungai"
              width={530}
              height={500}
            />
          </Box>
        </Box>
      </Cover>
    </Box>
  );
}

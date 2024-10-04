"use client";
import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import Link from "next/link";
import Cover from "./Cover";
import theme from "@/app/theme";
import AnimatedIcons from "./AnimatedIcons";

const menuItems = (
  <>
    {["services", "works", "notes", "contacts"].map((item) => (
      <Typography
        key={item}
        component={Link}
        href={`/${item}`}
        sx={{
          color: theme.palette.text.primary,
        }}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </Typography>
    ))}
  </>
);
export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Cover>
      <Box
        sx={{
          "& a": {
            textDecoration: "none",
          },
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: "8px 0",
            width: "100%",
          }}
        >
          <Typography
            component={Link}
            href="/home"
            variant="h4"
            sx={{
              color: theme.palette.text.primary,
              width: isMobile ? "100%" : "33%",
              textAlign: isMobile ? "center" : "left",
              "&:hover": {
                color: theme.palette.text.secondary,
              },
            }}
          >
            George Mungai
          </Typography>

          {!isMobile && (
            <Stack
              direction="row"
              gap={5}
              alignItems="center"
              sx={{
                "& a": {
                  position: "relative",
                  display: "inline-flex", 
                  alignItems: "center", 
                  "&::before": {
                    content: "'<'",
                    display: "inline-block",
                    marginRight: "5px",
                    color: "transparent",
                    transition: "color 0.2s ease-in-out",
                    verticalAlign: "middle", 
                  },
                  "&::after": {
                    content: "'>'",
                    display: "inline-block",
                    marginLeft: "5px", 
                    color: "transparent",
                    transition: "color 0.2s ease-in-out",
                    verticalAlign: "middle",
                  },
                },
                "& a:hover": {
                  color: theme.palette.text.secondary,
                  "&::before": {
                    color: theme.palette.text.secondary,
                  },
                  "&::after": {
                    color: theme.palette.text.secondary,
                  },
                },
                width: "33%",
              }}
            >
              {menuItems}
            </Stack>
          )}
          {!isMobile && (
            <Stack
              direction="row"
              sx={{
                width: "33%",
              }}
            >
              <AnimatedIcons />
            </Stack>
          )}
        </Stack>
      </Box>
    </Cover>
  );
}

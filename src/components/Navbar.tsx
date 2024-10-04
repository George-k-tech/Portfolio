"use client";
import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Cover from "./Cover";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import theme from "@/app/theme";

interface THamburgerMenuProps {
  handleDrawerOpen: () => void;
}

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

const menuIcons = (
  <>
    <LinkedInIcon
      sx={{
        color: "#0A66C2",
      }}
    />
    <Image src="/images/gitlab.svg" alt="gitlab" width={24} height={24} />
    <GitHubIcon sx={{ color: "#181717" }} />
    <EmailIcon sx={{ color: "#0072C6" }} />
  </>
);

const HamburgerMenu = ({ handleDrawerOpen }: THamburgerMenuProps) => (
  <IconButton
    sx={{ display: { md: "block", lg: "none" } }}
    onClick={handleDrawerOpen}
  >
    <MenuIcon />
  </IconButton>
);

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Cover>
      <Box
        sx={{
          padding: "20px 0px",
          "& a": {
            textDecoration: "none",
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: "8px 0" }}
        >
          <Typography
            component={Link}
            href="/home"
            variant="h4"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            George{" "}
            <span
              style={{
                color: theme.palette.text.disabled,
              }}
            >
              Mungai
            </span>
          </Typography>

          {!isMobile && (
            <Stack
              direction="row"
              gap={5}
              alignItems="center"
              sx={{
                "& a": {
                  position: "relative",
                  "&::before": {
                    content: "' < '",
                    color: "transparent",
                    transition: "color 0.2s ease-in-out",
                  },
                  "&::after": {
                    content: "' > '",
                    color: "transparent",
                    transition: "color 0.2s ease-in-out",
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
              }}
            >
              {menuItems}
            </Stack>
          )}
          {!isMobile && (
            <Stack direction="row" gap={3}>
              {menuIcons}
            </Stack>
          )}

          {isMobile && <HamburgerMenu handleDrawerOpen={handleDrawerOpen} />}
        </Stack>
      </Box>

      {isMobile && (
        <Drawer
          anchor="right"
          open={open}
          onClose={handleDrawerClose}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#525359",
            },
          }}
        >
          <List>
            <ListItem sx={{ width: 300 }}>
              <Stack direction="column" gap={2} sx={{}}>
                {menuItems}
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction="column" gap={3}>
                {menuIcons}
              </Stack>
            </ListItem>
          </List>
        </Drawer>
      )}
    </Cover>
  );
}

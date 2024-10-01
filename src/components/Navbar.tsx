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

interface THamburgerMenuProps {
  handleDrawerOpen: () => void;
}

const menuItems = (
  <>
    {["services", "works", "notes", "contacts"].map((item) => (
      <Typography key={item} component={Link} href={`/${item}`}>
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </Typography>
    ))}
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
            variant="h3"
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
              gap={20}
              alignItems="center"
              sx={{
                "& a:hover": {
                  textDecoration: "underline",
                  transition: "ease-in-out 0.2s",
                },
              }}
            >
              {menuItems}
            </Stack>
          )}

          {isMobile && <HamburgerMenu handleDrawerOpen={handleDrawerOpen} />}
        </Stack>
      </Box>

      {isMobile && (
        <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
          <List>
            <ListItem sx={{ width: 300 }}>
              <Stack
                direction="column"
                gap={2}
                sx={{
                  "& a:hover": {
                    color: "#FFFFF7",
                    transition: "ease-in-out 0.6s",
                  },
                }}
              >
                {menuItems}
              </Stack>
            </ListItem>
          </List>
        </Drawer>
      )}
    </Cover>
  );
}

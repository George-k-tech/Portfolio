import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import { Box, useMediaQuery, useTheme } from "@mui/material";

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

export default function AnimatedIcons() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      {menuIcons}
    </Box>
  );
}

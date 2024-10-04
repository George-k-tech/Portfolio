import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import linkedInnAnimationData from "../../public/lottie/linkedInn.json";
import githubAnimationData from "../../public/lottie/github.json";
import mailAnimationData from "../../public/lottie/mail.json";

import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function AnimatedIcons() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <a
          href="https://www.linkedin.com/in/george-mungai-54229419b/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <Lottie
            animationData={linkedInnAnimationData}
            style={{
              width: "40px",
            }}
          />
        </a>
        <a
          href="https://github.com/George-k-tech"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <Lottie
            animationData={githubAnimationData}
            style={{
              width: "30px",
            }}
            target="_blank"
          />
        </a>
        <a
          href="https://gitlab.com/kariukigeorge511"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <Image
            src="/images/gitlab.svg"
            alt="gitlab"
            width={30}
            height={30}
            unoptimized
          />
        </a>
        <a>
          <Lottie
            animationData={mailAnimationData}
            style={{
              width: "30px",
            }}
          />
        </a>
      </Box>
    </>
  );
}

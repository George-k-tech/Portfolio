"use client";

import { Container } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  color?: string;
}

export default function Cover({ children, color }: Readonly<Props>) {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "80%",
        backgroundColor:color,
      }}
    >
      {children}
    </Container>
  );
}

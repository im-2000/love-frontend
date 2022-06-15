import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Box
      mt={10}
      sx={{ display: "flex", justifyContent: "center", align: "center" }}
    >
      <CircularProgress />
    </Box>
  );
}

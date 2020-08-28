import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export const Hero = ({ title, subtitle }) => (
  <>
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="textPrimary"
      gutterBottom
    >
      {title}
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
      {subtitle}
    </Typography>
  </>
);

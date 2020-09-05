import React from "react";
import Typography from "@material-ui/core/Typography";

export const Hero = ({ title, subtitle }) => (
  <>
    {title && <Typography
      component="h1"
      variant="h2"
      align="center"
      color="textPrimary"
      gutterBottom
    >
      {title}
    </Typography>}
    {subtitle && <Typography variant="h5" align="center" color="textSecondary" paragraph>
      {subtitle}
    </Typography>}
  </>
);

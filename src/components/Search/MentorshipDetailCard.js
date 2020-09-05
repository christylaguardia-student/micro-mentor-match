import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import PanToolIcon from '@material-ui/icons/PanTool';

export function MentorshipDetailCard({
  title,
  type,
  category,
  frequency,
  length,
}) {
  // const text = type === "coffee"
  //   ? `${category} - ${length} coffee chat`
  //   : `${category} ${type} - ${frequency} ${length} session${frequency === "one" ? "" : "s"}`;

  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      wrap="nowrap" spacing={2}>
      <Grid item xs>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item>
        <Tooltip title="Request" aria-label="request">
          <IconButton aria-label="request">
            <PanToolIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

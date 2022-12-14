import React from 'react';
import { Box, useTheme } from '@mui/material'
import { tokens } from '../theme/theme';

export default function TopBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
        sx={{
            display: 'flex',
            alignItems: "center",
            backgroundColor: colors.greenAccent[500],
            width: "300hv",
            height: "30px",
            color: "white",
            pl:"1rem"
        }}
    >commissioningProgress</Box>
  )
}


import React from 'react';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme/theme';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Piechart ({progress}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    let value = (progress/12402)*100;
    let minval = 0;
    let maxVal = 100;
    return (
      <Box sx={{display:"flex",flexDirection:"column",justifyContent: "center", alignItems:"center", height:150, width:90, color:"black", }}>
        <CircularProgressbar
          value = {value}
          minValue = {minval}
          maxValue = {maxVal}
          strokeWidth = {13}
          background = {false}
          text = {progress}
        />
        <Box sx={{fontSize:20, color: colors.blueAccent[500]}}>{value.toFixed(2)}%</Box>
      </Box>
    )
}
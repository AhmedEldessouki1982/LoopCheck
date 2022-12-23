import React from 'react';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme/theme';
//mui outlined icons
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';


export default function Totalcard() {
  let trendStatus = true;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{display:'flex', alignItems: "center",height:110, width:400, color:"black",ml: 5,background: colors.greenAccent[800]}}>
        <Box sx={{flex:2}}><TrendingUpOutlinedIcon sx={{fontSize: 60, color: "blue"}}/></Box>
        <Box sx={{flex:6 }}>center</Box>
        {
          !trendStatus ? <Box sx={{flex:2 }}><ArrowDropDownOutlinedIcon sx={{fontSize: 70, color: "red"}}/></Box>
          :<Box sx={{flex:2 }}><ArrowDropUpOutlinedIcon sx={{fontSize: 70, color: "green"}}/></Box>
        }
        
    </Box>
  )
}
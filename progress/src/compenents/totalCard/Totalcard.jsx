import React from 'react';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme/theme';
import {Context} from '../context/DataContext';
import Piechart from '../piechart/Piechart';

//mui outlined icons
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

export default function Totalcard() {
  let usedContext = React.useContext(Context);
  let signals = usedContext.signalList.IOList;

  let trendStatus = true;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{position:"relative", display:'flex', alignItems: "center",height:100, width:400, color:"black",ml: 5,}}>
        <Box sx={{flex:1}}><SpeedOutlinedIcon sx={{fontSize: 60, color: "lightRed"}}/></Box>
        <Box sx={{alignSelf: "center", flex:2, color: colors.primary[100], ml: 3}}>
          Total Progress
        </Box>
        <Piechart progress = {signals.filter(({status})=> status).length}/> 
        {
          !trendStatus ? <Box sx={{flex:2 }}><ArrowDropDownOutlinedIcon sx={{fontSize: 70, color: "red"}}/></Box>
          :<Box sx={{flex:2 }}><ArrowDropUpOutlinedIcon sx={{fontSize: 70, color: "green"}}/></Box>
        }
    </Box>
  )
}
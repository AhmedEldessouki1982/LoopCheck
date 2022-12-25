import React from 'react';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme/theme';
import {Context} from '../context/DataContext';

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
    <Box sx={{position:"relative", display:'flex', alignItems: "center",height:100, width:250, color:"black",ml: 5,background: colors.greenAccent[900]}}>
        <Box sx={{flex:2}}><SpeedOutlinedIcon sx={{fontSize: 60, color: "lightRed"}}/></Box>
        <Box sx={{flex:6, color: colors.primary[100], ml: 3}}>
          <h4>Total Progress</h4>
          {signals.filter(({status})=> status).length} signals
        </Box>
        {
          !trendStatus ? <Box sx={{flex:2 }}><ArrowDropDownOutlinedIcon sx={{fontSize: 70, color: "red"}}/></Box>
          :<Box sx={{flex:2 }}><ArrowDropUpOutlinedIcon sx={{fontSize: 70, color: "green"}}/></Box>
        }
        <Box sx={{position: "absolute", top: 72, left: "72%", fontSize: 20, color: colors.greenAccent[300]}}>+{1000}</Box>   
    </Box>
  )
}
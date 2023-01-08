import React from 'react';
import './App.css';
import RenderLineChart from './compenents/chart/RenderLineChart';
import Datagrid from './compenents/dataGrid/Datagrid';
import TopBar from './compenents/topbar/TopBar';
import Totalcard from './compenents/totalCard/Totalcard';
//import MUI theme
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../src/compenents/theme/theme.js';
//mui loading component
import CircularProgress from '@mui/material/CircularProgress';
//context
import {Context} from '../src/compenents/context/DataContext';
import { GetDataAPI } from './utils/GetDataAPI';

export default function App() {
  let [theme, colorMode] = useMode();
  //context consuming
  let usedContext = React.useContext(Context);
  let {signalList ,dispatch} = usedContext ;

  React.useEffect(
    () => {
      GetDataAPI(dispatch)
    },[]
  )
  
  return (
    <> 
      <ColorModeContext.Provider value = {colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          {
            signalList.loading ?
            <Box sx={{display:"flex",gap:"15px", color: "blue",justifyContent:"center",alignItems:"center",mt:"15%"}}><CircularProgress/>Loading...</Box>: 
              <Box>
                <TopBar />
                <Box sx={{display:"flex",gap:"15px"}}>
                  <Box sx={{display:"flex",flexDirection:"column" ,gap:"15px"}}> 
                    <RenderLineChart />
                    <Totalcard />
                  </Box>
                  <Box>
                    <Datagrid />
                  </Box>
                </Box>
              </Box>
          }
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
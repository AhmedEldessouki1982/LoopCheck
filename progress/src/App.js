import './App.css';
import RenderLineChart from './compenents/chart/RenderLineChart';
import Datagrid from './compenents/dataGrid/Datagrid';
import TopBar from './compenents/topbar/TopBar';

//import MUI theme
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../src/compenents/theme/theme.js';

export default function App() {
  let [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value = {colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <TopBar />  
          <Box sx={{display:"flex", gap:"10px"}}> 
            <RenderLineChart /> 
            <Datagrid />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
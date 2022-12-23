import React from 'react'
import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme/theme';
import { DataGrid } from '@mui/x-data-grid';
import {Context} from '../context/DataContext'


export default function Datagrid() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let usedContext = React.useContext(Context);
  let signals = usedContext.signalList.IOList;

  const columns = [
  { field: 'id', headerName: 'id', width: 5 },
  {
    field: 'kks',
    headerName: 'kks',
    width: 110,
    editable: true,
  },
  {
    field: 'Description',
    headerName: 'Description',
    width: 200,
    editable: true,
  },
  {
    field: 'SignalType',
    headerName: 'SignalType ',
    width: 90,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'status',
    width: 10,
  },
   {
    field: 'date',
    headerName: 'date',
    width: 90,
  },

];

const rows = signals.sort((a,b)=>a.id-b.id).map(
   signal => (
    {
        id: signal.id,
        kks: signal.kks,
        Description: signal.Description,
        SignalType: signal.SignalType,
        status: signal.status,
        date: signal.date,
    }
   )
)

  return (
    <Box sx={{height:550, width:650, color:"black",mt: "10px", background: colors.primary[500]}}>
        <DataGrid
        sx={{borderColor: colors.greenAccent[500]}}
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        onSelectionModelChange = {item => usedContext.dispatch({type:"SIGNAL_CHECKED",checked: item[item.length-1]})}
        
        />
    </Box>
  )   
}
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Box } from '@mui/material';
// import TimeandDates from '../../utils/TimeandDate.js';
import {Context} from '../context/DataContext';


// let xAxis = TimeandDates(7); 
export default function RenderLineChart() {
    let usedContext = React.useContext(Context);
    let daily = usedContext.signalList.dailyStatus;
    
    let data = (daily) => Object.keys(daily).map(
        date => ({
            "date": date,
            "loops": daily[date]
        })
    )

    return (
        <Box sx={{pt: "15px"}}>
            <LineChart width={850} height={300} data={data(daily)}>
                <Line type="monotone" dataKey="loops" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <Tooltip/>
                <XAxis dataKey="date" />
                <YAxis dataKey="loops"/>
            </LineChart>
        </Box>
    )
}
    

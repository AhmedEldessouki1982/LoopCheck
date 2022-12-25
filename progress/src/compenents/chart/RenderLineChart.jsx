import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Box } from '@mui/material';
import TimeandDates from '../../utils/TimeandDate.js';
import {Context} from '../context/DataContext';


let xAxis = TimeandDates(7); 
export default function RenderLineChart() {
    let usedContext = React.useContext(Context);
    let signals = usedContext.signalList;
    console.log(signals.dailyStatus)




    const data = [
        {
            "date": xAxis[6],
            "loops": 150,
        },
        {
            "date": xAxis[5],
            "loops":  80,
        },
        {
            "date": xAxis[4],
            "loops": 65,
        },
        {
            "date": xAxis[3],
            "loops": 100,
        },
        {
            "date": xAxis[2],
            "loops": 110,
        },
        {
            "date": xAxis[1],
            "loops": 30,
        },
        {
            "date": xAxis[0],
            "loops": 105,
        }
    ]

    return (
        <Box sx={{pt: "15px"}}>
            <LineChart width={850} height={300} data={data}>
                <Line type="monotone" dataKey="loops" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <Tooltip/>
                <XAxis dataKey="date" />
                <YAxis dataKey="loops"/>
            </LineChart>
        </Box>
    )
}
    

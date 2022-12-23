import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Box } from '@mui/material';
import {data} from '../../utils/signalData.js';
export default function RenderLineChart() 
{
    return (
        <Box sx={{pt: "15px"}}>
            <LineChart width={850} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </Box>
    )
}
    

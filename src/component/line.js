import {Line} from "react-chartjs-2";
import {useContext} from 'react'
import profileContext from '../context/profile';
import{
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, 
} from "chart.js";

import {lineChartData} from "../utils/data";

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);


const LineGraph = ()=>{
    const {profile} = useContext(profileContext)
    return <Line data={profile.lineChartData} />
};

export default LineGraph;


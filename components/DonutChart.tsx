"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);
const DonutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        labels: ['Bank-1', 'Bank-2', 'Bank-3'], 
        datasets: [
            {
                label: "Banks",
                data: [1250, 34245, 23452],
                backgroundColor: [
                    'rgba(128, 0, 128, 0.7)',   // Purple
                    'rgba(75, 0, 130, 0.7)',     // Indigo
                    'rgba(148, 0, 211, 0.7)',    // Violet
                    'rgba(238, 130, 238, 0.7)',   // Orchid
                    'rgba(186, 85, 211, 0.7)',    // Medium Orchid
                    'rgba(221, 160, 221, 0.7)'    // Plum
                    
                ]
            }
        ] 
    };

    return (
        <Doughnut data={data} 
        options={
            {
                cutout: "60%",
                rotation: 18,
                plugins: {
                    legend: {
                        display:false
                    }
                }
            }
        }/> 
    );
}

export default DonutChart;
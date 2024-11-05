import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface Data {
    name: string;
    value: number;
}

const myData: Data[] = [
    {name: 'Category A', value: 400},
    {name: 'Category B', value: 300},
    {name: 'Category C', value: 200},
    {name: 'Category D', value: 100},
];

const colors =  ['#0088FE', '#00C49f', '#ffbb28', '#FF8099'];

const PieChartComponent: React.FC = () => {
    return (
        <PieChart width={400} height={400}>
            <Pie
                data={myData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
            >
                {myData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default PieChartComponent;
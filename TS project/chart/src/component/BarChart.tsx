import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataItem {
    name: string;
    value: number;
}

const myData: DataItem[] =[
    {name:'Jan', value: 123},
    {name:'Feb', value: 234},
    {name: 'Mar', value:345},
    {name: 'Apr', value: 456},
]

const BarChartComponent: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={myData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
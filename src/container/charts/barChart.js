import React, { Component } from 'react'
import { BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot, XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList } from 'recharts';
const data = [
    { name: 'food', uv: 2000, pv: 2013, amt: 4500, time: 1, uvError: [100, 50], pvError: [110, 20] },
    { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, time: 2, uvError: 120, pvError: 50 },
    { name: 'storage', uv: 3200, pv: 1398, amt: 5000, time: 3, uvError: [120, 80], pvError: [200, 100] },
    { name: 'digital', uv: 2800, pv: 2800, amt: 4000, time: 4, uvError: 100, pvError: 30 },
];

class BarChart1 extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={{margin: '0.2rem'}}>
                <BarChart width={this.props.width} height={this.props.height} data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" barSize={20}/>
                    <Bar dataKey="uv" fill="#82ca9d" barSize={20}/>
                </BarChart>
            </div>
        )
    }
}

export default BarChart1
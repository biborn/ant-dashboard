import React, { Component } from 'react'
import D3Funnel from 'd3-funnel';

class FunnelChart extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
            data: [
                { label: 'Inquiries', value: 5000 },
                { label: 'Applicants', value: 2500 },
                { label: 'Admits', value: 500 },
                { label: 'Deposits', value: 200 },
            ],
            options: {
                block: {
                    dynamicHeight: true,
                    minHeight: 15,
                },
            }
        }
    }
    componentDidMount() {
        const chart = new D3Funnel(this.myRef.current);
        chart.draw(this.state.data, this.state.options);
    }
    render() {
        return (
            <div>  
                <h2>FunnelChart Component</h2>
                <div ref={this.myRef}  style={{ height: this.props.height, width: this.props.width}} />
            </div>
        )
    }
}

export default FunnelChart;
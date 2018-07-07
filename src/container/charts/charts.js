import React, { Component } from 'react'
import { Tabs } from 'antd';
import GooglePlace from '../../components/google/googlePlace'
import LineChart1 from './lineChart';
import PieChart1 from './pieChart'
const TabPane = Tabs.TabPane;

class Charts extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: <LineChart1 />, key: '1' },
            { title: 'Tab 2', content: <GooglePlace />, key: '2' },
            { title: 'Tab 3', content: <PieChart1/>, key: '3', closable: false },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    render() {
        return (
            <div style={{ backgroundColor: '#fff', margin: '0.5rem' }}>
                <Tabs
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                >
                    {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
                </Tabs>
            </div>
        );
    }
}

export default Charts;
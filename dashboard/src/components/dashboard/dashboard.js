import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dashboardActions from '../../actions/dashboard';

import Gauge from '../charts/gauge';
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { memory: this.props.memory, cpu: this.props.cpu };

    }
    componentDidMount() {
        this.props.actions.getData();
        this.interval = setInterval(this.props.actions.getData,3000);
    }

    componentWillReceiveProps(nextProps) {

        this.setState({ memory: nextProps.memory, cpu: nextProps.cpu });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="row">

                <div className="col-md-6">

                    <Gauge data={this.state.memory} title="Memory" seriesTitle="Memory" containnerName="meomory" />
                </div>
                <div className="col-md-6">

                    <Gauge data={this.state.cpu} title="CPU" seriesTitle="CPU" containnerName="cpu" />
                </div>
            </div>
        );
    }
}


function mapStateToprops(state) {
    return ({

        memory: state.dashboard.data.memory,
        cpu: state.dashboard.data.cpu
    });
}

function mapDispatchToProps(dispatch) {

    return { actions: bindActionCreators(dashboardActions, dispatch) };
}
export default connect(mapStateToprops, mapDispatchToProps)(Dashboard);
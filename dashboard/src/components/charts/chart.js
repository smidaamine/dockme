import React, {Component} from 'react';

import Highcharts from "../../../node_modules/highcharts/highcharts.src";


class Chart extends Component {


     // When the DOM is ready, create the chart.
    componentDidMount() {
        // Extend Highcharts with modules
     
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
            
                module(Highcharts);
            });
        }
        // Set container which the chart should render to.
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container, 
            this.props.options
        );
    }
     componentWillReceiveProps(nextProps) {
         let point = this.chart.series[0].points[0];
          point.update(nextProps.data);
     }
    //Destroy chart before unmount.
    componentWillUnmount(){
        this.chart.destroy();
    }
    //Create the div which the chart will be rendered to.
    render () {
        return(
        <div id={this.props.container}/>
        );
    }
}

export default Chart;
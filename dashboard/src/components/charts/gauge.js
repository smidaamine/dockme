import React, { Component } from 'react';
import Chart from './chart';
import Highcharts from "highcharts";
import Solidgauge from 'highcharts/highcharts-more';



// Add additional module required to render a treemap.
let Gauge = ({data, title, seriesTitle, containnerName}) => {

    function getOptions() {
        let options = {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },

            title: {
                text: 'Memory'
            },

            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#FFF'],
                            [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#333'],
                            [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 100,

            
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: ''
                },
                plotBands: [{
                    from: 0,
                    to: 30,
                    color: '#55BF3B' // green
                }, {
                    from: 30,
                    to: 60,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 60,
                    to: 100,
                    color: '#DF5353' // red
                }]
            },
            credits: {
                enabled: false
            },

            series: [{
                name: 'Memory',
                data: [100],
                tooltip: {
                    valueSuffix: ' %'
                }
            },
            ]
        };

        return options;
    }

    let options = getOptions();

    options.series[0].data = [data];
    options.yAxis.title.text = seriesTitle;
    options.title.text = title;

    return (
        <Chart container={containnerName} options={options} modules={[Solidgauge]} data={data}/>
    );
};

export default Gauge;



export default {
    colors: [
        '#258be2',
        '#55bf3b',
        '#f45b5b',
        '#8085e9',
        '#8d4654',
        '#7798bf',
        '#aaeeee',
        '#ff0066',
        '#eeaaee',
        '#df5353',
        '#7798bf',
        '#aaeeee',
        '#666666'
    ],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        }
    },
    title: {
        style: {
            color: '#7b7474',
            fontSize: '14px',
            fontWeight: 'bold'
        },
        align: 'left',
        margin: 10,
        x: 30
    },
    subtitle: {
        style: {
            color: 'black'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size: 16px">{point.key}</span><br/>',
        borderWidth: 0,
        backgroundColor: '#cecece',
        style: {
            fontSize: '16px'
        }
    },
    legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '14px'
        }
    },
    xAxis: {
        labels: {
            style: {
                color: '#6e6e70',
                fontSize: '12px',
                fontFamily: 'Verdana, sans-serif',
                fontWeight: "bold"
            }
        },
        title: {
            style: {
                fontSize: '14px',
                fontFamily: 'Verdana, sans-serif',
                fontWeight: "bold"
            }
        }
    },
    yAxis: {
        labels: {
            style: {
                color: '#6e6e70',
                fontSize: '14px'
            }
        },
        title: {
            style: {
                fontSize: '14px',
                fontFamily: 'Verdana, sans-serif',
                fontWeight: "bold"
            }
        }
    },
    plotOptions: {
        series: {
            shadow: true,
            cursor: 'pointer'
        },
        candlestick: {
            lineColor: '#404048'
        }
    },
    navigator: {
        xAxis: {
            gridLineColor: '#D0D0D8'
        }
    },
    rangeSelector: {
        buttonTheme: {
            fill: 'white',
            stroke: '#C0C0C8',
            'stroke-width': 1,
            states: {
                select: {
                    fill: '#D0D0D8'
                }
            }
        }
    },
    scrollbar: {
        trackBorderColor: '#C0C0C8'
    },
    background2: '#E0E0E8',
    global: {
        timezoneOffset: new Date().getTimezoneOffset()
    },
    credits: {
        enabled: false
    }
};

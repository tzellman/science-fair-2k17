import Ember from 'ember';
import Highcharts from 'ember-highcharts/components/high-charts';
import defaultTheme from 'science-fair-2k17/themes/default-theme';

const {computed, computed: {alias}} = Ember;

export default Highcharts.extend({

    classNames: ["chart-bar"],
    theme: defaultTheme,

    chartOptions: computed(function () {

        return {
            chart: {
                type: 'column'
            },
            title: {
                text: this.get("title") || ''
            },
            xAxis: {
                type: 'category',
                title: {
                    text: this.get("xTitle")
                }
            },
            yAxis: {
                min: 0,
                max: 10,
                title: {
                    text: this.get("yTitle"),
                },
                plotBands: this.get("plotBands") || []
            },
            legend: {
                enabled: false,
            },
            tooltip: {
                formatter: this.get("formatter"),
                crosshairs: true
            }
        };
    }),

    content: alias("data")
});

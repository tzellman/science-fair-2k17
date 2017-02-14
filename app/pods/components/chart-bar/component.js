import Ember from 'ember';
import Highcharts from 'ember-highcharts/components/high-charts';
import defaultTheme from 'science-fair-2k17/themes/default-theme';

const {computed, computed: {alias}} = Ember;

export default Highcharts.extend({

    classNames: ["chart-bar"],
    theme: defaultTheme,
    type: 'column',
    legendEnabled: false,

    chartOptions: computed(function () {

        let options = {
            chart: {
                type: this.get("type")
            },
            title: {
                text: this.get("title") || ''
            },
            xAxis: {
                type: 'category',
                title: {
                    text: this.get("xTitle")
                },
                categories: this.get("categories")
            },
            yAxis: {
                min: this.get("yMin"),
                max: this.get("yMax"),
                title: {
                    text: this.get("yTitle"),
                },
                plotBands: this.get("plotBands") || []
            },
            legend: {
                enabled: this.get("legendEnabled"),
            },
            tooltip: {
                formatter: this.get("formatter"),
                crosshairs: true
            }
        };

        // override some complete sections
        if (this.get("yAxis")) {
            options.yAxis = this.get("yAxis");
        }

        return options;
    }),

    content: alias("data")
});

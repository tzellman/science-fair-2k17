import Ember from 'ember';
const {Controller, computed} = Ember;

export default Controller.extend({

    focusCharts: computed("model", function () {

        const sortByTime = (d1, d2) => d1.name === 'Control' ? -1 : (d1.y < d2.y ? -1 : 1);
        const sortByPercent = (d1, d2) => d1.name === 'Control' ? -1 : (d1.y < d2.y ? 1 : -1);

        const data = this.get("model");
        const timeSeries = {
            name: "Time",
            type: 'column',
            data: data.map(d => ({y: d.focusTime, name: d.label})).sort(sortByTime)
        };

        const percent2 = {
            name: "Percent Correct with 2 distractions",
            type: 'column',
            data: data.map(d => ({y: d.percent2, name: d.label})).sort(sortByPercent)
        };

        const percent6 = {
            name: "Percent Correct with 6 distractions",
            type: 'column',
            data: data.map(d => ({y: d.percent6, name: d.label})).sort(sortByPercent)
        };

        return [
            {
                series: [timeSeries],
                title: "Focus : Total Time",
                yMin: 0,
                yTitle: "Time (seconds)"
            },
            {
                series: [percent2],
                title: "Percent Correct with 2 Distractions",
                yMin: 0,
                yMax: 100,
                yTitle: "Percent Correct"
            },
            {
                series: [percent6],
                title: "Percent Correct with 6 Distractions",
                yMin: 0,
                yMax: 100,
                yTitle: "Percent Correct"
            }
        ];
    }),

    sortedData: computed("model", function () {
        const sortFunc = (d1,
                          d2) => d1.name === 'Control' ? -1 : (d2.name === 'Control' ? 1 : ((d1.switching + d1.repeating) < (d2.switching + d2.repeating) ? -1 : 1));
        return this.get("model").sort(sortFunc);
    }),

    juggleData: computed("sortedData", function () {

        const data = this.get("sortedData");

        const switching = {
            name: "Switching between tasks",
            type: 'column',
            yAxis: 0,
            data: data.map(d => d.switching / 1000.0)
        };

        const repeating = {
            name: "Repeating the same task",
            type: 'column',
            yAxis: 0,
            data: data.map(d => d.repeating / 1000.0)
        };

        return [switching, repeating];
    }),

    categories: computed("sortedData", function () {
        return this.get("sortedData").map(d => d.label);
    }),

    percentAxis: computed(function () {
        return [{ // percent axis
            title: {
                text: 'Percent Correct',
            },
            min: 0,
            max: 100
        }];
    }),

    timeAxis: computed(function () {
        return [{ // time axis
            title: {
                text: 'Time (seconds)',
            }
        }];
    })


});

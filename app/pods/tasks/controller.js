import Ember from 'ember';
const {Controller, computed} = Ember;

export default Controller.extend({

    focusData: computed("model", function () {

        const data = this.get("model");
        const timeSeries = {
            name: "Time",
            type: 'column',
            yAxis: 0,
            data: data.map(d => d.focusTime)
        };

        const percent2 = {
            name: "Percent Correct with 2 distractions",
            type: 'column',
            yAxis: 1,
            data: data.map(d => d.percent2)
        };

        const percent6 = {
            name: "Percent Correct with 6 distractions",
            type: 'column',
            yAxis: 1,
            data: data.map(d => d.percent6)
        };

        return [timeSeries, percent2, percent6];
    }),

    juggleData: computed("model", function () {

        const data = this.get("model");

        const switching = {
            name: "Switching between tasks",
            type: 'column',
            yAxis: 0,
            data: data.map(d => d.switching / 1000.)
        };

        const repeating = {
            name: "Repeating the same task",
            type: 'column',
            yAxis: 0,
            data: data.map(d => d.repeating / 1000.)
        };

        return [switching, repeating];
    }),

    categories: computed("model", function () {
        return this.get("model").map(d => d.label);
    }),

    focusYAxis: computed(function () {
        return [{ // time axis
            title: {
                text: 'Time (seconds)',
            }
        }, { // percent axis
            title: {
                text: 'Percent Correct',
            },
            opposite: true,
            min: 0,
            max: 100
        }];
    }),

    juggleYAxis: computed(function () {
        return [{ // time axis
            title: {
                text: 'Time (seconds)',
            }
        }];
    })


});

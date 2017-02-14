import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        let data = [
            {label: "Control", value: 10},
            {label: "Hat", value: 1},
            {label: "Light Shirt", value: 4},
            {label: "Dark Shirt", value: 2},
            {label: "Swim Shirt", value: 3},
            {label: "Sunglasses", value: 3},
            {label: "SPF 15", value: 9},
            {label: "SPF 30", value: 8},
            {label: "SPF 50", value: 7},
            {label: "SPF 70", value: 6}
        ];

        return {
            data: [{
                name: '',
                data: data.sortBy("value").reverse().map(d => ({name: d.label, y: d.value})),
                pointPadding: 0.1,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif',
                    fontWeight: "bold"
                }
            }],
            plotBands: [{
                from: 0,
                to: 3.333,
                color: 'rgba(255, 0, 0, 0.1)',
                label: {
                    text: 'Low Absorption',
                    style: {
                        color: '#606060',
                        fontWeight: 'bold'
                    },
                    align: "right"
                },
                zIndex: 0
            }, {
                from: 3.333,
                to: 6.666,
                color: 'rgba(255, 0, 0, 0.2)',
                label: {
                    text: 'Medium Absorption',
                    style: {
                        color: '#606060',
                        fontWeight: 'bold'
                    },
                    align: "right"
                },
                zIndex: 0
            }, {
                from: 6.666,
                to: 10,
                color: 'rgba(255, 0, 0, 0.3)',
                label: {
                    text: 'High Absorption',
                    style: {
                        color: '#606060',
                        fontWeight: 'bold'
                    },
                    align: "right"
                },
                zIndex: 0
            }]
        };
    }
});

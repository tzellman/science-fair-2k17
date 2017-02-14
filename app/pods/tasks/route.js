import Ember from 'ember';

const DATA = [
    {
        label: "Control",
        switching: 4831,
        repeating: 2552,
        additionalTimeForSwitching: 2279,
        incorrect: 0,
        juggleTime: 64.444,
        focusTime: 115,
        percent2: 92,
        score2: 1.67,
        percent6: 100,
        score6: 2
    },
    {
        label: "TV",
        switching: 6386,
        repeating: 9409,
        additionalTimeForSwitching: 3023,
        incorrect: 2,
        juggleTime: 165,
        focusTime: 142,
        percent2: 92,
        score2: 1.67,
        percent6: 83,
        score6: 1.33
    },
    {
        label: "Video Game",
        switching: 4731,
        repeating: 5224,
        additionalTimeForSwitching: -493,
        incorrect: 2,
        juggleTime: 101.51,
        focusTime: 112,
        percent2: 100,
        score2: 2,
        percent6: 75,
        score6: 1
    },
    {
        label: "Piano",
        switching: 3626,
        repeating: 3057,
        additionalTimeForSwitching: 569,
        incorrect: 0,
        juggleTime: 62.063,
        focusTime: 106,
        percent2: 92,
        score2: 1.67,
        percent6: 100,
        score6: 2
    },
    {
        label: "Exercise",
        switching: 7255,
        repeating: 4930,
        additionalTimeForSwitching: 2325,
        incorrect: 2,
        juggleTime: 114.325,
        focusTime: 124,
        percent2: 75,
        score2: 1,
        percent6: 75,
        score6: 1
    }
];


export default Ember.Route.extend({

    model(){
        return DATA;
    }
});

import fetch from 'node-fetch';

export default class CalculatorService{
    static getSunCircumference(){
        return fetch('/api/calculate', {
            method: 'GET',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        })
            .then(res => res.json());
    }

    static getSunCircumferenceWithPILength(precision){
        return fetch(`/api/calculate/${precision}`, {
            method: 'GET',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        })
            .then(res => res.json());
    }

    static reset(){
        return fetch('/api/reset', {
            method: 'GET',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        })
            .then(res => res.json());
    }
}
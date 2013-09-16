require.config({
    baseUrl: 'js/',
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        jquery: 'libs/jquery',
        text: 'libs/text'
    },
    shim: {}
});

require(['App'], function (App) {
    'use strict';
    App.initialize();
});
define([
    'views/Home',
    'views/SectionOne',
    'views/SectionTwo',
    'views/SectionThree',
], function (HomeView, sectionOneView, sectionTwoView, sectionThreeView) {

    'use strict';
    
    var Routes = Backbone.Router.extend({

        routes: {
            '': 'home',
            'sectionOne': 'sectionOne',
            'sectionTwo': 'sectionTwo',
            'sectionThree': 'sectionThree'
        }

    });

    var initialize = function () {
        console.log('loading route...');

        var appRouter = new Routes;

        appRouter.on('route:home', function () {
            var homeView = new HomeView();
            homeView.render();
        });

        appRouter.on('route:sectionOne', function () {
            var sectionOne = new sectionOneView();
            sectionOne.render();
        });

        appRouter.on('route:sectionTwo', function () {
            var sectionTwo = new sectionTwoView();
            sectionTwo.render();
        });

        appRouter.on('route:sectionThree', function () {
            var sectionThree = new sectionThreeView();
            sectionThree.render();
        });

        Backbone.history.start({
            //pushState: true, 
            root: "/sandbox_js/app/"
        });
    };

    return {
        initialize: initialize
    };
});
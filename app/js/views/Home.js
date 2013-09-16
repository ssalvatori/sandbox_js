define(['underscore', 'backbone', 'libs/text!../templates/home.tpl'], function (_, Backbone, homeTemplate) {

    'use strict';
    var HomeView = Backbone.View.extend({
        el: '#content',

        template: homeTemplate,

        initialize: function () {

        },

        render: function () {
            var tmpl = _.template(this.template);
            $(this.el).html(tmpl);
            return this;
        }


    });

    return HomeView;
});
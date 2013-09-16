define(['underscore', 'backbone', 'jquery', 'libs/text!../templates/sectionOne.tpl'], 
       function (_, Backbone, $, sectionOneTemplate) {

    'use strict';
    var SectionOneView = Backbone.View.extend({
        el: '#content',

        events: {
            "click .submit": "sendForm"
        },

        template: sectionOneTemplate,

        initialize: function () {

        },

        render: function () {
            console.log("rendering sectionOne");

            var tmpl = _.template(this.template);
            $(this.el).html(tmpl);
            return this;


        }

    });

    return SectionOneView;
});
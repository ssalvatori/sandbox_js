define(['underscore', 'backbone', 'jquery', 'libs/text!../templates/sectionTwo.tpl'], 
       function (_, Backbone, $, sectionTwoTemplate) {
           
    'use strict';
    var SectionTwoView = Backbone.View.extend({
        el: '#content',

        events: {
            "click .submit": "sendForm"
        },

        template: sectionTwoTemplate,

        initialize: function () {

        },

        render: function () {
            console.log("rendering sectionTwo");

            var tmpl = _.template(this.template);
            $(this.el).html(tmpl);
            return this;


        }

    });

    return SectionTwoView;
});
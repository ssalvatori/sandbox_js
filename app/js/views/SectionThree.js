define(['underscore', 'backbone', 'jquery', 'libs/text!../templates/sectionThree.tpl'], 
       function (_, Backbone, $, sectionThreeTemplate) {

    'use strict';
    var SectionThreeView = Backbone.View.extend({
        el: '#content',

        events: {
            "click .submit": "sendForm"
        },

        template: sectionThreeTemplate,

        initialize: function () {

        },

        render: function () {
            console.log("rendering sectionThree");

            var tmpl = _.template(this.template);
            $(this.el).html(tmpl);
            return this;


        }

    });

    return SectionThreeView;
});
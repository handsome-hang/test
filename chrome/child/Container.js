define([
			'dojo/dom',
            'dojo/dom-construct',
			'dojo/_base/declare',
			'dojo/_base/lang',
			'dojo/_base/array',
			'dojo/on',
			'dojo/topic',
			'dojo/query',
			'dojo/dom-class',
			'dojo/dom-style',
			'dijit/_Widget',
			'dijit/_TemplatedMixin',
			'dijit/_WidgetsInTemplateMixin',
			'dojo/text!./template/a.html'
], function (dom, domConstruct, declare, lang, array, on, topic, query, domClass, domStyle, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, template) {
	return declare('child.Container', [_Widget, _TemplatedMixin, _WidgetsInTemplateMixin], {
		templateString: template,
		deleteList: null,
		containerParas: null,
		postCreate: function () {
			this.inherited(arguments);
			this.init();
		},
		init: function () {
			this.deleteList = [];
		},
		destroy: function () {
			this.inherited(arguments);
		}
	});
});
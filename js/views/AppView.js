var AppView = Backbone.View.extend({
	el: '#app',

	initialize:function(){
		this.title = new TitleView();

		this.entry = new EntryView({
			collection: this.collection
		});

		this.list = new ResultsView({
			collection: this.collection
		});
		
		this.render();
	},

	render: function(){
		this.$el.append([
			this.title.$el,
			this.entry.$el,
			this.list.$el
		]);

		return this;
	}
});
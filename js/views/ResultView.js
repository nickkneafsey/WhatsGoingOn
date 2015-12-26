var ResultView = Backbone.View.extend({
	template: _.template('<div class="event"><p><%= title %></p><p><%= time %></p><p><%= venue %></p><p><%= city %></p></div>'),
	initialize: function(){
		this.render();
		this.on('change', this.render, this);
	},
	events:{
		mouseover: 'clickAction'
	},
	render: function(){
		var entry = this.template({
			title: this.model.get("title"),
			time: this.model.get("time"),
			venue: this.model.get("venue"),
			city: this.model.get("city"),
			image: this.model.get("image")
		});
		console.log(this.model.showBackground);
		console.log(this.model.get("image"));
		if (this.model.showBackground === true){
			this.$el.css({
				'background-color': 'black',
        'background-image': 'url("'+this.model.get("image")+'")',
        // 'background-size': 'cover',
        'color': 'white'
    	});
		}

		this.$el.html(entry);
	},
	clickAction: function(){
		// console.log("got here");
		this.model.toggleBackground();
		this.render();
	}
});
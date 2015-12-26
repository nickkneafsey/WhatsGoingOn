var Result = Backbone.Model.extend({
	defaults: {
		title: '',
    	time: '',
    	venue: '',
    	city: '',
    	image: '',
    	performer: ''
	},
	showBackground: false,
	toggleBackground: function(){
		if (this.showBackground===false){
			this.showBackground = true;
		} else {
			this.showBackground = false;
		}
	}

});
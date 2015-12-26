var Results = Backbone.Collection.extend({
	model: Result,
	addEvents: function(zip){
    var that = this;
    this.reset();
		$.get(
      'http://api.seatgeek.com/events?per_page=100&postal_code=' + zip, 
      function(data) {
        if (data){
          data.events.forEach(function(event){
            that.add({
              title: event.title,
              image: event.performers[0].image,
              time: event.datetime_local,
              venue: event.venue.name,
              city: event.venue.city,
              performer: event.performers[0].name
            })        
          });
        }
        
      }.bind(this)
    );
	}
});
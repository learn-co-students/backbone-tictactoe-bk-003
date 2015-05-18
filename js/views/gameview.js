(function() {
	app.GameView = Backbone.View.extend({
		
		events: {
			"click": "handleClick"
		},

		initialize: function() {
			this.game = new app.Game();
			// wire up event listeners here
			// call on render here
		},

		render: function() {
			// your code here
		},

		handleClick: function(event) {
			// your code here
			// hint: try calling #target on event
		},

		drawX: function(id) {
			// your code here
		},

		drawO: function(id) {
			// your code here
		},

		tie: function() {
			// your code here
		},

		win: function() {
			// your code here
		}

	});
})();
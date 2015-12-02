(function() {
	app.GameView = Backbone.View.extend({

		initialize: function(){
			this.game = new app.Game();
			this.listenTo(this.game, 'X', this.drawX);
			this.listenTo(this.game, 'O', this.drawO);
			this.listenTo(this.game, 'win', this.win),
			this.listenTo(this.game, 'tie', this.tie);
			this.render();
			$('#container').html(this.el);
		},
		
		events: {
			"click": "handleClick"
		},

		render: function() {
			this.$el.html('<div id="message"></div><table border="1" cellpadding="40"><tbody><tr><td id="0"></td><td id="1"></td><td id="2"></td></tr><tr><td id="3"></td><td id="4"></td><td id="5"></td></tr><tr><td id="6"></td><td id="7"></td><td id="8"></td></tr></tbody></table>')
			return this;
		},

		handleClick: function(event) {
			// your code here
			// hint: try calling #target on event
			this.game.doTurn(+event.target.id);
		},

		drawX: function(id) {
			this.$el.find('#'+id).html('X')
		},

		drawO: function(id) {
			this.$el.find('#'+id).html('O')
		},

		tie: function() {
			this.postGame("Tie game");
		},

		win: function() {
			// your code here
			this.postGame('Player ' + this.game.player()+ ' Wins!');
		},
		postGame: function(message) {
			this.$el.find('td').html("");
			this.$el.find('#message').html(message);
			this.game.set(this.game.defaults());
			this.game.set('turns',0);
     	}

	});
})();
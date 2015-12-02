(function() {
	app.GameView = Backbone.View.extend({
		
		events: {
			"click": "handleClick"
		},

		initialize: function() {
			this.game = new app.Game();
			this.listenTo(this.game, 'X', this.drawX);
			this.listenTo(this.game, 'O', this.drawO);
			this.listenTo(this.game, 'win', this.win),
			this.listenTo(this.game, 'tie', this.tie);

			this.render();
			$("#container").html(this.el)
			// wire up event listeners here
			// call on render here
		},

		render: function() {
			// your code here

			this.$el.html('<div id="message"></div><table border="1" cellpadding="40"><tbody><tr><td id="0"></td><td id="1"></td><td id="2"></td></tr><tr><td id="3"></td><td id="4"></td><td id="5"></td></tr><tr><td id="6"></td><td id="7"></td><td id="8"></td></tr></tbody></table>');
			return this;
		},

		handleClick: function(event) {
			// your code here
			// hint: try calling #target on event
			this.game.doTurn(+event.target.id);
			
		},

		drawX: function(id) {
			// your code here
			this.$el.find('#'+id).html('X')
		},

		drawO: function(id) {
			// your code here
			this.$el.find('#'+id).html('O')
		},

		tie: function() {
			// your code here
			if (this.game.get("turn") == 9) {
				this.passMessage("Tie game");

				this.$el.find('td').empty();
				this.game.set(this.game.defaults());
				this.game.set('turns',0);
			};
			
			
		},

		win: function() {
			// your code here
				this.passMessage("Player " + this.game.player()+ " Wins!")
				this.$el.find('td').empty();
				this.game.set(this.game.defaults());
				this.game.set('turns',0);

				

		},
		passMessage: function(message){
			this.$el.find('#message').html(message)
		},
		reset : function(){
			
			// if (this.game.get("turn") === 9) {
				this.$el.find('td').empty();
				this.game.set(this.game.defaults());
				this.game.set('turn',0);
			// }
			
		}

	});
})();
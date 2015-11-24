(function() {
	app.GameView = Backbone.View.extend({
		
		events: {
			"click": "handleClick"
		},

		initialize: function() {
			this.game = new app.Game();
			// wire up event listeners here
			// call on render here
			this.listenTo(this.game, 'X', this.drawX),
			this.listenTo(this.game, 'O', this.drawO),
			this.listenTo(this.game, 'win', this.win),
			this.listenTo(this.game, 'tie', this.tie),
			this.render();
			$('#container').html(this.el)
		},

		render: function() {
			// your code here
			this.$el.html('<div id="message"></div><table border="1" cellpadding="40"><tbody><tr><td id="0"></td><td id="1"></td><td id="2"></td></tr><tr><td id="3"></td><td id="4"></td><td id="5"></td></tr><tr><td id="6"></td><td id="7"></td><td id="8"></td></tr></tbody></table>')
			return this;
		},

		buildBoard: function() {
    		// code here
    		var count = 0
    		var html = this.createRowArray(3, '<tr>')
    		html.forEach(function(elem, index){

    		})
		},

		createRowArray: function(size, element) {
  			var arr = []
  			for (var i=0; i<size; i++) {
  				arr.push(element)
  			}
  			return arr;
		},

		handleClick: function(event) {
			// your code here
			// hint: try calling #target on event
			this.game.doTurn(Number(event.target.id))
		},

		drawX: function(id) {
			// your code here
			$('#'+id).html('X')
			// this.game.updateState(id)
		},

		drawO: function(id) {
			// your code here
			$('#'+id).html('O')
			// this.game.updateState(id)
		},

		tie: function() {
			this.gameEnder('Tie game')
		},

		win: function() {
			// your code here
			this.gameEnder('Player ' + this.game.player()+ ' Wins!')
		}, 
		gameEnder: function(message) {
			$('#message').html(message)
			this.game.clear()
			this.game.set(this.game.defaults())	
			for(var i=0;i<9;i++){
        		$("#" + i).text('');
      		}
		}

	});
})();
(function() {
	app = {};
	app.Game = Backbone.Model.extend({
		defaults: function (){ return {
			turn: 0,
			board: [
			  null, null, null,
				null, null, null, 
				null, null, null
			],
			winningCombos: [
				[0,3,6],
				[0,1,2],
				[3,4,5],
				[6,7,8],
				[1,4,7],
				[2,5,8], 
				[0,4,8],
				[2,4,6]
			]
		}},

		updateState: function(id) {
			// your code here
		},

		tie: function() {
			// your code here
		},
		
		gameOver: function() {
			// your code here
		},
		
		player: function() {
			// your code here
		},
		
		winnerCheck: function() {
			// your code here
		},
		
		doTurn: function(id) {
			// your code here
		}
		
	})
})();
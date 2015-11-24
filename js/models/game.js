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
			var ary = this.get('board')
			ary[id] = this.player()
			this.set('board', ary)		
		},
		
		gameOver: function() {
			if(this.tie()){
				this.trigger('tie', this.player())
				return true;
			} else if(this.winnerCheck()) {
				this.trigger('win', this.player())
				return true;
			} else {
				return false
			}
		},

		tie: function() {
			return this.get('board').indexOf(null) == -1
		},
		
		player: function() {
			return this.get('turn') % 2 == 0 ? 'X' : 'O';
		},
		
		winnerCheck: function() {
			// your code here
			var verdict = false
			this.get('winningCombos').forEach(function(elem){
				this.checkCells(elem) ? verdict = true : '';
			}, this)
			return verdict
		},

		checkCells: function(ary) {
			var board = this.get('board');
			for(var i=0;i<ary.length; i++) {
				if (board[ary[i]] != this.player()) {
					return false
				} 
			};
				return true
		},
		
		doTurn: function(id) {
			// your code here
			this.updateState(id);
			if (this.gameOver()){

			} else {
				this.trigger(this.player(), id)
				this.trigger(this.player())	
				var turn = this.get('turn');
				this.set('turn', turn+1);
			}
		}
		
	})
})();
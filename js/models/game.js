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
			board = this.get("board");
			board[id] = this.player();
		},

		tie: function() {
			// your code here
			if(this.get("turn") === 8)return true;
			return false
		},
		
		gameOver: function() {
			// your code here
			if (this.winnerCheck()){
				return true;
			}
			this.trigger("tie",this.player())
			return this.tie()
		},
		
		player: function() {
			if (this.get("turn")%2 == 0) 
				return 'X';
			else
				return 'O';
			
			// your code here
		},
		
		winnerCheck: function() {
			// your code here
			check = this.get("winningCombos")
			for (var i = 0; i < check.length;i++){
					
				if (this.winner(check[i])){
					
					this.trigger("win",this.player())
					return true;
				}
				
			}

				return false;
		},
		
		doTurn: function(id) {
			// your code here

			
			this.updateState(id);
			if (this.gameOver()){
				 this.trigger("reset",this.player())
				 return;
			}
			if (id >= 0 && id <= 8) {
				this.trigger(this.player(),id);
				this.incrementTurn();
			};

		},

		incrementTurn: function(){
			turn = this.get("turn");
			this.set("turn",++turn);
		},

		winner : function(arr){
			var board = this.get("board");

			match = [board[arr[0]],board[arr[1]],board[arr[2]]];
			if ((_.uniq(match).length === 1 ) && (match[0] === this.player())){
							return true}
			else{
				return false}
		},
		
	})
})();	
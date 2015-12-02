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
		initialize : function(){
			// this.on('X', this.);
		},

		updateState: function(id) {
			var b = this.get('board');
			b[id] = this.player();
			this.set('board',b);
		},

		tie: function() {
			return this.get("board").filter(function(e){return e==null; }).length==0
		},
		
		gameOver: function() {
			if (this.tie()) {
				return true;
			} else if(this.winnerCheck()) {
				return true;
			} else {
				return false;
			}
		},
		
		player: function() {
			return (+this.get('turn')%2)?"O":"X";
		},
		
		winnerCheck: function() {
			var players = ["O","X"];
			var board = this.get('board');
			var t = this;
			var found = false;
			players.forEach(function(ele){
				var data = [];
				board.forEach(function(e,i) {
					if (e==ele) data.push(i);
				});
				t.get('winningCombos').forEach(function(combo){
					if (data.indexOf(combo[0])>-1 && data.indexOf(combo[1])>-1 && data.indexOf(combo[2])>-1) {
						found = true;	
					} 
				});
				// if (this.checkExistsInArray(this.get))
			});
			return found;
		},

		checkExistsInArray: function(arr, subset){
			var sublen = subset.length;
			var len = arr.length - sublen;
			for (var i = 0; i < len+1; i++) {
				var found = true;
				for(var j = 0; j < sublen; j++) {
					if (arr[i+j] != subset[j]) found = false;
				}
				if (found) return true;
			}
			return false;
		},

		
		doTurn: function(id) {
			this.trigger(this.player(), id );
			this.updateState(id);
			if (this.gameOver()) {
				if (this.tie()) {
					this.trigger('tie', this.player() );
				} else {
					this.trigger('win', this.player() );
				}
			}
			this.set('turn', this.get('turn')+1);
		}
		
	})
})();
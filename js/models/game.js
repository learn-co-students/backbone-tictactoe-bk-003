(function() {
	app = {};
	app.Game = Backbone.Model.extend({
		defaults : {
			turn : 0,
			board : [null, null, null,
							null, null, null, 
							null, null, null],
			winningCombos : [[0,1,2], [3,4,5], [6,7,8],
								 [0,3,6], [1,4,7], [2,5,8], 
								 [0,4,8], [2,4,6]]
		},
		isFilled : function(id) {
			return this.get("board")[id];
		},
		updateState : function(id) {
			if(this.isFilled(id)) {
				return false;
			}
			else {
				var temp = this.get("board");
				temp[id] = this.player();
				this.set("board", temp)
			}
			return true;
		},
		tie : function() {
			for(var i = 0; i < this.get("board").length; i++) {
				if(!this.isFilled(i)) {
					return false;
				}
			}
			return true;
		},
		gameOver : function() {
			for(var i = 0; i < this.get("winningCombos").length; i++) {
				if(this.checkCells(this.get("winningCombos")[i]) == true) {
					return "win";
				}
			}
			if(this.tie()) {
				return "tie";
			}
			return false;
		},
		player : function() {
			if(this.get("turn") % 2 == 0) {
				return "X";
			}
			else {
				return "O";
			}
		},
		checkCells : function(combo) {
			for(var i = 0; i < combo.length; i++) {
				if(this.get("board")[combo[i]] != this.player()) {
					return false;
				}
			}
			return true;
		},
		// take an int and return a boolean, were we able to move
		// events: "X" | "O" | "win" | "tie"
		incTurn : function (){
			this.set("turn", this.get("turn")+1);
		},
		doTurn : function(id) {
			if(this.updateState(id)) {
				this.trigger(this.player(), id);
				var state = this.gameOver()
				if (state) {
					this.trigger(state, this.player());
				}
				this.incTurn();
				return true;
			}
		}	
	})
})();
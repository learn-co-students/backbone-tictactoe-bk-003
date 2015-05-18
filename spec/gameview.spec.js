'use strict';
describe('board', function() {

  describe( "#initialize", function() {
    it("should set the game property of the view to be an instance of the game model", function() {
      debugger;
      var gameView = new app.GameView();
      expect(gameView.game).not.toBeUndefined();
    });     
  });

  describe("#wire up event listeners", function() {
    describe( "#initialize", function() {
      it("should wire up the X event listeners on the model", function() {
        var spy = spyOn(app.GameView.prototype, "drawX");
        var gameView = new app.GameView;
        gameView.game.trigger("X");
        expect(spy).toHaveBeenCalled();
      });     
    });

    describe( "#initialize", function() {
      it("should wire up the O event listeners on the model", function() {
        var spy = spyOn(app.GameView.prototype, "drawO");
        var gameView = new app.GameView;
        gameView.game.trigger("O");
        expect(spy).toHaveBeenCalled();
      });     
    });

    describe( "#initialize", function() {
      it("should wire up the tie event listeners on the model", function() {
        var spy = spyOn(app.GameView.prototype, "tie");
        var gameView = new app.GameView;
        gameView.game.trigger("tie");
        expect(spy).toHaveBeenCalled();
      });     
    });

    describe( "#initialize", function() {
      it("should wire up the win event listeners on the model", function() {
        var spy = spyOn(app.GameView.prototype, "win")
        var gameView = new app.GameView;
        gameView.game.trigger("win");
        expect(spy).toHaveBeenCalled();
      });     
    });
  })

  describe("#last parts of initialization", function() {
    var gameView;
    beforeEach(function() {
      gameView = new app.GameView;
    });
    describe( "#initialize", function() {
      it("should call render", function() {
        spyOn(gameView, "addIds");
        gameView.initialize();
        expect(gameView.addIds).toHaveBeenCalled();
      });     
    });

    describe( "#initialize", function() {
      it("should add the ids to the dom", function() {
        spyOn(gameView, "render");
        gameView.initialize();
        expect(gameView.render).toHaveBeenCalled();
      });     
    });
  })

  describe("test rendering, adding ids and handling clicks", function() {
    var gameView;
    beforeEach(function() {
      setFixtures('<div id="container"></div>'); 
      gameView = new app.GameView;
    });
    describe( "#render & addIds", function() {
      it("should create a board in HTML when its initialized", function() {
        expect($("#container")).toContainHtml('<table border="1" cellpadding="40"><tbody><tr><td id="0"></td><td id="1"></td><td id="2"></td></tr><tr><td id="3"></td><td id="4"></td><td id="5"></td></tr><tr><td id="6"></td><td id="7"></td><td id="8"></td></tr></tbody></table>');
      });     
    });

    describe( "#drawO", function() {
      it("should draw an O on the clicked element", function() {
        gameView.drawO(3)
        expect($("#3").text()).toEqual("O")
      });     
    });

    describe( "#drawX", function() {
      it("should draw an X on the clicked element", function() {
        gameView.drawX(3)
        expect($("#3").text()).toEqual("X")
      });     
    });
  })

  describe( "#handleClick", function() {
    it("should tell the game what element was clicked", function() {
      setFixtures('<div id="container"></div>'); 
      var spy = spyOn(app.Game.prototype, "doTurn")
      var gameView = new app.GameView;
      $("#3").click()
      expect(spy).toHaveBeenCalledWith(3)    
    });     
  });
});

# Backbone Tic-Tac-Toe

## Overview
* About
* Instructions
* Hints: Model
* Hints: View

### About

In this lab we will be creating the functionality of the games we made in jQuery TicTacToe and OO jQuery TicTacToe, however, this time we will be building it with backbone!

You'll be modifying only two files to pass this lab, the model which is here: `js/models/game.js` and the view, which is here: `js/views/gameview.js`. We have stubbed out the functions you will need to build your game in those files, but feel free to build any helper functions you may need. Although you will only need to modify these two files it is worth thinking about what has already been done for you in `app.js`.

To view your game and check your progress, you can simply open `index.html` in the browser.

Right click on the link below and select "Save link as..." to see a video of how your game should behave.

[backbone tic-tac-toe game video](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/js/backbone-tic-tac-toe.mp4)

## Game Model Hints

While building the game model you will want to take advantage of backbone's Event: trigger. This even will let you broadcast changes in your model to the rest of of your application. See [Trigger Events](http://backbonejs.org/#Events-trigger) for more details. 

## Game View Hints
When building the view you will want to look into the below areas. Having a good understanding of `$el` will help you in knowing how your html is being added to the program. Understanding the `Event.target` will let you figure out what specific events are acting on and getting element ids using jQuery will help you to access the elements you intend to. 

* [$el](http://backbonejs.org/#View-$el)
* [Event.target](https://api.jquery.com/event.target/)
* [Get id of element using jQuery](http://stackoverflow.com/a/3239600/2890716)



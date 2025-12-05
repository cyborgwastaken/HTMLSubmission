ig.module(
  'game.main'
)
.requires(
  'impact.game',
  'impact.font',
  'game.levels.dorm1'
)
.defines(function(){
  MyGame = ig.Game.extend({
    gravity: 300,
    init: function(){
      // Key bindings
      ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
      ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
      ig.input.bind( ig.KEY.X, 'jump' );
      ig.input.bind( ig.KEY.C, 'shoot' );
      // Load level
      this.loadLevel( LevelDorm1 );
    },
    update: function(){
      this.parent();
    },
    draw: function(){
      this.parent();
    }
  });

  ig.main('#canvas', MyGame, 60, 320, 240, 2);
});

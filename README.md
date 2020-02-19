# Corgi Tag

[Play Corgi Tag](https://wendy-wm-wu.github.io/Corgi_Tag/)


Corgi Tag is an interactive corgi-tagging game with one objective: tag as many corgis as you can and stock up on candy. Inspired by Fruit Ninja, Corgi Tag is built using Javascript, HTML5 Canvas, and CreateJS libraries to create an interactive game with intuitive user controls, smooth animations, and fun sound effects.

## How to Play
Click anywhere to start the timer, and then start tagging! Run your mouse over the flying corgis. If you hit them just right, you'll get a smiley corgi :) and sweet treats. Whatever you do, don't hit the bread (even if they look like corgis!); 

You've got 60 seconds... Ready... Set... GO!!!

## Libraries/Assets
* [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* [CreateJS](http://createjs.com/)

## Features
All moving objects in the game (corgis and loaves of bread) are treated as projectiles. When the projectile object is first initialized, it is given a random internal x- and y-velocity. Every 25 milliseconds, its internal velocity (and thus its position on the canvas) is updated with respect to the time elapsed.

``` javascript
//projectile.js

setVelocity() {
  this.x_velocity = Math.random() * 12 * this.xDirection;
  this.y_velocity = (Math.random() * 10) + 33;
}

updateVelocity() {
  this.time += 25;

  const corgi = this.corgi;
  const time = (this.time) / 1000;

  corgi.y = corgi.y - (time * (this.y_velocity - (30 * time)));
  corgi.x += this.x_velocity;
  corgi.rotation += 3 * this.xDirection;
}
```

Like true projectile objects, the corgi's/bread's x-velocity stays constant throughout its entire life cycle on the canvas. In order to create better gameplay, however, the speed at which the projectile falls vertically had to be modified.

## Future Directions
* [ ] Persisting high scores table (ideally with Node.js)
* [ ] Different speeds/difficulty settings

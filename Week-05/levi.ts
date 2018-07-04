// levels:
// +map [2d array]
// +current map
// .check Tile (x,y) / collision
// +Floor Tile
// +Wall Tile 

// Charakter:
// + HP / Dp / Sp
// + damage
// + avatar
// + position
// . move
// + level
// .get Hp
// .get Op
// .get Sp

// Hero, Skeleton, Boss: move method, that can update the avatar ex.    // one skeleton must have a key

// Game:
// + constructor:
// + Gamestate
// + Display
// .render map
// .render hero
// .render enemies

// Display:
// +ctx (canvas)  we will have image drawing there
// +tile size
// .loadImage (path)
// .newimage
// .draw image
// .thisimages(key)

// Game State:
// +enemies []
// + Hero
// + map
// +enemyStepCounter

// Utils:
// getRAndom (max)

// 1. Game : keyboard handler
// 2.Gamestate:map.checkwall (if fals)
// 3.hero.move
// 4.Display:render

// Rendering:
// Game: render
// Gamestate: map
// Game: rendermap, render Hero, render enemies calls drawimage
//


let stones: any [] = [0, 0, 0, 1, 0, 1, 0, 0, 0, 0,"\n", 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,] 

console.log(stones)
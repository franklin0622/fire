controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.createProjectileFromSprite(img`
      . . . . . 8 8 8 8 8 8 . . . . .
      . . . . . 8 8 9 8 . . . . . . .
      . . . 8 8 8 8 9 9 . . . . . . .
      . . . 8 6 6 9 8 8 . . . . . . .
      . . 8 8 8 9 9 8 8 8 . . . . . .
      . 8 9 8 8 9 8 8 8 8 8 . . . . .
      8 9 9 8 9 9 8 8 6 8 8 . . . . .
      8 6 8 8 8 8 8 6 6 9 8 . . . . .
      8 6 8 8 9 9 8 8 9 9 8 . . . . .
      8 8 8 8 8 9 8 8 9 8 8 8 . . . .
      . 8 9 9 9 9 8 8 9 8 8 8 . . . .
      . 8 8 8 8 8 8 8 8 8 . . . . . .
      . . . . . . . . . . . . . . . .
      . . . . . . . . . . . . . . . .
      . . . . . . . . . . . . . . . .
      . . . . . . . . . . . . . . . .
  `,extinguisher,50,0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
	otherSprite.destroy()
    info.changeScoreBy(1)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let fire: Sprite = null
scene.setBackgroundColor(7)
let extinguisher = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 1 1 . . . . . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . . 1 1 . . . . . . . . . 
    . . . . 2 2 2 2 . . . . . . . . 
    . . . 2 2 2 2 2 . . . . . . . . 
    . . . 2 2 2 2 2 . . . . . . . . 
    . . . 2 2 2 2 2 . . . . . . . . 
    . . . 2 2 2 2 2 . . . . . . . . 
    . . . 2 2 2 2 2 . . . . . . . . 
    . . . 2 2 2 2 2 . . . . . . . . 
    . . . 2 2 2 2 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
extinguisher.setPosition(10, 10)
controller.moveSprite(extinguisher)
game.onUpdateInterval(2000, function () {
    fire = sprites.create(img`
        . . . . . . . . . . 2 4 2 2 . . 
        . . . . . . . . 2 2 5 5 2 . . . 
        . . . . . . . . 2 5 5 4 . . . . 
        . . . . . . 2 2 5 4 4 2 2 . . . 
        . . . . 2 2 2 2 5 4 4 2 2 . . . 
        . . . . 2 2 2 4 5 4 5 5 2 . . . 
        . . . 2 2 2 4 2 2 4 5 2 . . . . 
        . . . 2 2 2 4 2 2 5 2 2 . . . . 
        . . . 2 2 5 5 5 4 5 2 2 . . . . 
        . . 2 2 4 5 4 5 4 5 2 2 . . . . 
        . . 2 2 5 2 5 5 4 5 2 2 2 . . . 
        . . 2 2 5 2 5 2 4 4 5 2 2 . . . 
        . . 2 2 5 2 5 2 4 2 5 5 2 2 . . 
        . . . 2 5 2 2 5 5 4 2 2 2 . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    fire.setPosition(160, randint(0, 120))
    fire.setVelocity(randint(-120,-20), 0)
})

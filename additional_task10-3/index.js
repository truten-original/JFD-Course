const heroPlayer = {
    name: 'Roma',
    health: 100,
    heatEnemy: function(enemy){enemy.health = enemy.health - 10}
}
const enemyPlayer = {
    name: 'Vurdalak',
    health: 100,
    heatHero: function(hero) {hero.health = hero.health - 10}
}
heroPlayer.heatEnemy(enemyPlayer)
console.log(enemyPlayer)




const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const startGame = () => {
    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        let random = getRandom(0, 1)
        if (random === 0) {
            heroPlayer.heatEnemy(enemyPlayer)
        } 
        if (random === 1) {
            enemyPlayer.heatHero(heroPlayer)
        }
    }
    if (heroPlayer.health > 0) {
        const { name, health } = heroPlayer
        alert(`${name} победил! у него осталось ${health} единиц здоровья!`)
    } else if (enemyPlayer.health > 0) {
        const { name, health } = enemyPlayer
        alert(`${name} победил! у него осталось ${health} единиц здоровья!`)
    }
}
startGame()
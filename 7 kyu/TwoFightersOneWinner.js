function declareWinner(fighter1, fighter2, firstAttacker) {
  let {health :HP1, damagePerAttack: Atack1} = fighter1;
  let {health :HP2, damagePerAttack: Atack2} = fighter2;

  function atack(h1, h2, a1, a2, name1, name2) {
    while (h1 > 0 || h2 > 0) {
      if ((h2 = h2 - a1) <= 0) return name1;
      if ((h1 = h1 - a2) <= 0) return name2;
    }
  }

  if (firstAttacker == fighter1.name) {
    return atack(HP1, HP2, Atack1, Atack2, fighter1.name, fighter2.name);
  } else {
    return atack(HP2, HP1, Atack2, Atack1, fighter2.name, fighter1.name);
  }
}

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
'use strict';

class Animal {
  static alive = [];
  constructor(name, health) {
    this.name = name;
    this.health = health !== undefined ? health : 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    this.animal = animal;
    if (!this.animal.hidden && this.animal instanceof Herbivore) {
      this.animal.health -= 50;
    }

    if (this.animal.health <= 0) {
      Animal.alive = Animal.alive.filter((herbivore) => herbivore.health > 0);
    }
  }
}

const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
const rabbit = new Herbivore('Max');

deer.hide();
panther.bite(deer);
lion.bite(deer);
rabbit.hide();
panther.bite(rabbit);

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

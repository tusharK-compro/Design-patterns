
class Hero {
  constructor(name, specialAbility) {
    this.name = name;
    this.specialAbility = specialAbility;

    this.getDetails = function() {
      return `${this.name} can ${this.specialAbility}`;
    };
  }
}

const IronMan = new Hero('Iron Man', 'fly');

console.log(IronMan.getDetails());
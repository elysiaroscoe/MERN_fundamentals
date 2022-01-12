class Ninja{
    constructor(name, health, speed = 3, strength =3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    
    sayName(){
        console.log(this.name);
    }
    
    showStats(){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }
    
    drinkSake(){
        this.health += 10;
        console.log(`Health: ${this.health}`);
    }
}


class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength =10, wisdom = 10){
        super(name, health, speed, strength)
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("The only true wisdom is in knowing you know nothing.");
    }
}

const newSensei = new Sensei ("Budha")
console.log(newSensei);

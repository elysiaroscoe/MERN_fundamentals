class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        target.resilience -= this.power;
        console.log(`${target.name} resilience is now ${target.resilience}`)
    }
}

class Effect extends Card{
    constructor(name,cost, text, stat, magnitude){
        super(name, cost)
        this.name = name;
        this.cost = cost;
        this.text = text,
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target){
        if( target instanceof Unit ) {
            console.log(this.text);
            if(this.stat == "resilience"){
                target.resilience += this.magnitude;
                console.log(target.resilience)
            }
            else if(this.stat == "power"){
                target.power += this.magnitude;
                console.log(target.power)
            }
        }
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}


const hardAlgorithm = new Effect("Hard Algorithm", 2,"Increase target's resilience by 3", "resilience", +3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", +2)

const redBeltNinja = new Unit("Red Belt Ninja", 3,3,4)
const blackBeltNinja = new Unit("Black Belt Ninja", 4,5,4)



hardAlgorithm.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);



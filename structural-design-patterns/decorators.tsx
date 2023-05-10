abstract class Car{
    public description: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}
class TataNexon extends Car{
    public description='Model Tata nexon';
    public cost(): number{
        return 1200000;
    }

}

class TataTiago extends Car{
    public description='Model Tata tiago';
    public cost(): number{
        return 600000;
    }
}

abstract class CarOptions extends Car{
    public decorateCar : Car;

    public abstract getDescription(): string ;
    public abstract cost(): number ;
}
//options
class MusicSystem extends CarOptions{
    public decorateCar : Car;

    constructor(car:Car){
        super();
        this.decorateCar=car;
    }
    public getDescription(): string {
        return this.decorateCar.getDescription() + ' , Enhanced 4-D Music System';
    }
    public cost(): number {
        return this.decorateCar.cost() + 35000;
    }

}

class CNG extends CarOptions{
    public decorateCar : Car;

    constructor(car:Car){
        super();
        this.decorateCar=car;
    }
    public getDescription(): string {
        return this.decorateCar.getDescription() + ' , with CNG included';
    }
    public cost(): number {
        return this.decorateCar.cost() + 22000;
    }

}

let myTiago =new TataTiago();
myTiago = new CNG(myTiago);
console.log(myTiago.cost())
class Amplifier{
    turnOn(){
        console.log('Turning on Amplifier')
    }  
    turnOff(){
        console.log('Turning off Amplifier')
    }
    setVolume(volume){
        console.log('Setting Volume to '+ volume)
    }
}

class PopcornMaker{
    turnOn(){
        console.log('Turning on Popcorn Maker')
    }  
    turnOff(){
        console.log('Turning off Popcorn Maker')
    }
    dispense(){
        console.log('Dispense Popcorns')
    }
}

class TV{
    turnOn(){
        console.log('Turning on TV')
    }  
    turnOff(){
        console.log('Turning off TV')
    }

}
class RoomLights{
    dim(){
        console.log('Dimming room lights');
    }
}

class HomeTheatreFacade{

    amplifier:Amplifier;
    lights:RoomLights;
    tv:TV;
    popcornmaker:PopcornMaker;

    constructor(amplifier:Amplifier, lights:RoomLights, tv:TV, popcornmaker:PopcornMaker){
        this.amplifier=amplifier;
        this.lights=lights;
        this.tv=tv;
        this.popcornmaker=popcornmaker;
    }
    watchMovie(){
        this.popcornmaker.turnOn();
        this.popcornmaker.dispense();

        this.lights.dim();

        this.tv.turnOn();

        this.amplifier.turnOn();
        this.amplifier.setVolume(7);

    }

    endMovie(){
        this.popcornmaker.turnOff();
        this.tv.turnOff();
        this.amplifier.turnOff();
    }
}


let amp=new Amplifier();
let lights=new RoomLights();
let tv=new TV();
let popcornmaker=new PopcornMaker();

let homeTheatreFacade= new HomeTheatreFacade(amp,lights,tv,popcornmaker);

homeTheatreFacade.watchMovie();
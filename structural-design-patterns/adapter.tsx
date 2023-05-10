interface IPhone{
    useLightning();
}

interface Android{
    useMicroUSB();
}

class iPhone14 implements IPhone{

    useLightning(){
        console.log('Lightning port')
    }
}

class onePlusNord implements Android{
    useMicroUSB(){
        console.log('MicroUSB port')
    }
}

class LightningToMicroAdapter implements Android{
    iphoneMobile: IPhone;

    constructor(iphone:IPhone){
        this.iphoneMobile = iphone;
    }

    useMicroUSB() {
        console.log('Converting to lightning');
        this.iphoneMobile.useLightning();
    }
   
    
}

let iphone=new iPhone14();
let chargerAdapter =new LightningToMicroAdapter(iphone);

chargerAdapter.useMicroUSB();
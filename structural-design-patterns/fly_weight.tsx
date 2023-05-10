// class IPhone{
//     constructor(model: string, screen: number, 
//       memory: number, sn: number) {}
// }
// let IPhones = [];
// for (let i = 0; i < 10000; i++) {
// let memory = i % 2 == 0 ? 64 : 128;
// IPhones.push(new IPhone("8U", 5.0, memory, i));
// }

class IPhoneFlyweight {
    constructor(public model: string, public screen: number,
      public memory: number) {

      }
}
class FlyweightFactory {
     phonesMap: Map<string, IPhoneFlyweight> = new Map();
    public get(model: string, screen: number, memory: number):  
     IPhoneFlyweight {
      const key = model + screen + memory;
      if (!this.phonesMap.has(key)) {
        this.phonesMap.set(key, new IPhoneFlyweight(model, 
          screen, memory));
      }
      return this.phonesMap.get(key)!;
    }
  }
class IPhone {
    constructor(flyweight: IPhoneFlyweight, sn: number) {

    }
}
  
class Main{
    static flyweightfactory: FlyweightFactory=new FlyweightFactory();
    getIphone(model: string, screen: number, memory: number, sn:number){
        const flyweight: IPhoneFlyweight = Main.flyweightfactory.get(model, screen, memory);
        return new IPhone(flyweight,sn);
    }
}

const obj= new Main();
let iphones=[];
for(let i=0;i<10000;i++){
    let memory = i%2==0?64:128;
    iphones.push(obj.getIphone("11",6.5,memory,i+1))
}
console.log("Iphone flyweight count:",Main.flyweightfactory.phonesMap.size)
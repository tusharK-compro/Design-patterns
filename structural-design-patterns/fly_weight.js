// class IPhone{
//     constructor(model: string, screen: number, 
//       memory: number, sn: number) {}
// }
// let IPhones = [];
// for (let i = 0; i < 10000; i++) {
// let memory = i % 2 == 0 ? 64 : 128;
// IPhones.push(new IPhone("8U", 5.0, memory, i));
// }
var IPhoneFlyweight = /** @class */ (function () {
    function IPhoneFlyweight(model, screen, memory) {
        this.model = model;
        this.screen = screen;
        this.memory = memory;
    }
    return IPhoneFlyweight;
}());
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory() {
        this.phonesMap = new Map();
    }
    FlyweightFactory.prototype.get = function (model, screen, memory) {
        var key = model + screen + memory;
        if (!this.phonesMap.has(key)) {
            this.phonesMap.set(key, new IPhoneFlyweight(model, screen, memory));
        }
        return this.phonesMap.get(key);
    };
    return FlyweightFactory;
}());
var IPhone = /** @class */ (function () {
    function IPhone(flyweight, sn) {
    }
    return IPhone;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.getIphone = function (model, screen, memory, sn) {
        var flyweight = Main.flyweightfactory.get(model, screen, memory);
        return new IPhone(flyweight, sn);
    };
    Main.flyweightfactory = new FlyweightFactory();
    return Main;
}());
var obj = new Main();
var iphones = [];
for (var i = 0; i < 10000; i++) {
    var memory = i % 2 == 0 ? 64 : 128;
    iphones.push(obj.getIphone("11", 6.5, memory, i + 1));
}
console.log("Iphone flyweight count:", Main.flyweightfactory.phonesMap.size);

const car = {
    noOfWheels: 4,
    shine: 5,
    start() {
        this.shine -= 1;
        return `car started ${this.noOfWheels}`;
    },
    stop() {
        return 'stopped';
    },
};

const myCar = Object.create(car, { owner: { value: 'John' } });
// const myCar2 = { owner: { value: 'John' } };
// myCar2.__proto__ = car;

console.log(myCar.noOfWheels);
console.log(myCar.start());
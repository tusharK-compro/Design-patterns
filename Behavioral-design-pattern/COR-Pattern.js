class CumulativeSum {
  constructor(intialValue = 0) {
    this.sum = intialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
  multiply(value) {
    this.sum *= value;
    return this;
  }
  subtract(value) {
    this.sum -= value;
    return this;
  }
}

// usage
const sum1 = new CumulativeSum(0);
console.log(sum1.add(10).subtract(2).multiply(50).sum); // 0+10-2x50=400

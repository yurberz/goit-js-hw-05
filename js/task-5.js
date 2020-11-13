// ВАРИАНТ Задание-5
class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance},price: ${car.price}`
    );
  }

  constructor(obgect, speed = 0, isOn = false, distance = 0) {
    this.speed = speed;
    this._price = obgect.price;
    this.maxSpeed = obgect.maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    this.speed + value <= this.maxSpeed ? (this.speed += value) : "";
  }

  decelerate(value) {
    this.speed - value >= 0 ? (this.speed -= value) : "";
  }

  drive(hours) {
    this.isOn ? (this.distance += hours * this.speed) : "";
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

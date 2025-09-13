// model.js
export class CounterModel {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  getValue() {
    return this.value;
  }
}

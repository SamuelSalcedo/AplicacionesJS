// controller.js
import { CounterModel } from "./model.js";
import { CounterView } from "./view.js";

class CounterController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Inicializar vista
    this.view.update(this.model.getValue());

    // Eventos
    this.view.bindIncrement(this.handleIncrement.bind(this));
    this.view.bindDecrement(this.handleDecrement.bind(this));
  }

  handleIncrement() {
    this.model.increment();
    this.view.update(this.model.getValue());
  }

  handleDecrement() {
    this.model.decrement();
    this.view.update(this.model.getValue());
  }
}

// Instanciar
const app = new CounterController(new CounterModel(), new CounterView());

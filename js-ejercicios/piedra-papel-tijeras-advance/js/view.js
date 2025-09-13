// view.js
export class CounterView {
  constructor() {
    this.app = document.getElementById("app");

    // Crear elementos
    this.counterValue = document.createElement("p");
    this.incrementButton = document.createElement("button");
    this.decrementButton = document.createElement("button");

    // Configurar botones
    this.incrementButton.textContent = "+";
    this.decrementButton.textContent = "-";

    // Insertar en la app
    this.app.appendChild(this.counterValue);
    this.app.appendChild(this.incrementButton);
    this.app.appendChild(this.decrementButton);
  }

  update(value) {
    this.counterValue.textContent = `Valor: ${value}`;
  }

  bindIncrement(handler) {
    this.incrementButton.addEventListener("click", handler);
  }

  bindDecrement(handler) {
    this.decrementButton.addEventListener("click", handler);
  }
}

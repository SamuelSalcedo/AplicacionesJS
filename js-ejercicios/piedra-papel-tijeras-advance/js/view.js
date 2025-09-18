// view.js
export class SelectionView {
  constructor() {
    this.app = document.getElementById("app");

    //Obtener el valor de los botones
    this.seleccion = document.querySelectorAll('.buttonGame');
    
    
    this.mostrarSeleccionado = document.createElement("p");
    
    // Insertar en la app
      this.app.appendChild(this.mostrarSeleccionado);
  }

  mostrarSeleccion(value){
    this.mostrarSeleccionado.textContent = `Seleccionado: ${value}`;
  }
  
  bindButtons(handler) {
    this.seleccion.forEach(boton => {
      boton.addEventListener("click", () => {
        handler(boton.value);
      });
    });
  }

}

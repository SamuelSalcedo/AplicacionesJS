// view.js
export class SelectionView {
  constructor() {
    this.app = document.getElementById("app");

    //Obtener el valor de los botones
    this.seleccion1 = document.getElementById('buttonSelect1');
    this.seleccion2 = document.getElementById('buttonSelect2');
    this.seleccion3 = document.getElementById('buttonSelect3');
    this.seleccion4 = document.getElementById('buttonSelect4');
    
    
    this.mostrarSeleccionado = document.createElement("p");
    
    // Insertar en la app
      this.app.appendChild(this.mostrarSeleccionado);
   // this.app.appendChild(this.incrementButton);
   // this.app.appendChild(this.decrementButton);
  }

  mostrarSeleccion(value){
    this.mostrarSeleccionado.textContent = `Seleccionado: ${value}`;
  }

  bindSelection(handler){
    this.seleccion1.addEventListener("click", () =>{
      handler(this.seleccion1.value);
    });
    this.seleccion2.addEventListener("click", () =>{
      handler(this.seleccion2.value);
    });
    this.seleccion3.addEventListener("click", () =>{
      handler(this.seleccion3.value);
    });
    this.seleccion4.addEventListener("click", () =>{
      handler(this.seleccion4.value);
    });
  }

}

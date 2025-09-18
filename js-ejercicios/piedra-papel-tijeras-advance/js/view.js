// view.js
export class SelectionView {
  constructor() {
    this.app = document.getElementById("app");

    //Obtener el valor de los botones
    this.seleccion = document.querySelectorAll('.buttonGame');
    
    //seleccion del jugador b
    this.seleccion2 = document.querySelectorAll('.buttonGame2')

    this.jugar = document.querySelector('.buttonGamePlay')

    this.mostrarSeleccionado = document.createElement("h2");

    this.mostrarGanador = document.createElement("h1");

    // Insertar en la app
      this.app.appendChild(this.mostrarSeleccionado);
      this.app.appendChild(this.mostrarGanador);

  }

  mostrarSeleccion(value){
    this.mostrarSeleccionado.textContent = `Seleccionado: ${value}`;
  }

  mostrarResultado(value){
        this.mostrarGanador.textContent = `GANADOR: ${value}`;  
  }
  
  bindButtons(handler) {
    this.seleccion.forEach(boton => {
      boton.addEventListener("click", () => {
        handler(boton.value);
      });
    });
  }

//segundo handler para el segundo boton
  bindButtonsB(handler) {
    this.seleccion2.forEach(boton => {
      boton.addEventListener("click", () => {
        handler(boton.value);
      });
    });
  }

  //este escucha el evento pra jugar
  jugarSeleccion(handler){
    this.jugar.addEventListener('click', () =>{
      handler(this.jugar.value);
    });
    
  }
}


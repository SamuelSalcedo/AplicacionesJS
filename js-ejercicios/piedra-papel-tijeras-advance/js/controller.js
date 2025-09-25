// controller.js
import { SelectionModel } from "./model.js";
import { SelectionView } from "./view.js";

class selectionController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // Inicializar vista
    //this.view.mostrarSeleccion(this.model.getValueA(this));

    this.view.mostrarResultado(this.model.getGanador(this));
    // Eventos
    this.view.bindButtons(this.handleUpdate.bind(this))
    //this.view.bindDecrement(this.handleDecrement.bind(this));
    this.view.bindButtonsB(this.handleUpdateB.bind(this));

    this.view.jugarSeleccion(this.jugarTodo.bind(this));

    this.view.reinicioJuego(this.reiniciar.bind(this));

    this.reiniciar();
  }
  jugarTodo(valor){    
    this.model.setGanador();
    this.view.mostrarResultado(this.model.getGanador());
    //el value del boton aun sin un uso adecuado asi que mejor lo quito
   // console.log(`GANADOR: ${valor}`)
  }

  reiniciar(value){
    this.model.setReset();
    //this.model.getReset();
    //this.view.mostrarSeleccion(this.model.getReset());
    this.view.mostrarResultado(this.model.getReset());
  }

  handleUpdate(valor){
    console.log(`VALOR DE A: ${valor}`);
    this.model.setValueA(valor);
  //  this.view.mostrarSeleccion(this.model.getValueA());
  }

  handleUpdateB(valor){
    console.log(`VALOR DE B: ${valor}`);
    this.model.setValueB(valor);
   // this.view.mostrarSeleccion(this.model.getValueB());
  }

  
}

// Instanciar
const app = new selectionController(new SelectionModel(), new SelectionView());

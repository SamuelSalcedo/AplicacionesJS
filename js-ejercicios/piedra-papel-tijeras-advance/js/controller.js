// controller.js
import { SelectionModel } from "./model.js";
import { SelectionView } from "./view.js";

class selectionController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Inicializar vista
    this.view.mostrarSeleccion(this.model.getValueA(this));

    this.view.mostrarResultado(this.model.getGanador(this));
    // Eventos
    this.view.bindButtons(this.handleUpdate.bind(this))
    //this.view.bindDecrement(this.handleDecrement.bind(this));
    this.view.bindButtonsB(this.handleUpdateB.bind(this));

    this.view.jugarSeleccion(this.jugarTodo.bind(this));
  }

  jugarTodo(valor){
//    this.view.jugarSeleccion(this.model.setGanador());
    
    this.model.convertirGanador();
    this.view.mostrarResultado(this.model.getGanador())
    console.log(`GANADOR: ${valor}`)
  }

  handleUpdate(valor){
    console.log(`VALOR DE A: ${valor}`);
    this.model.setValueA(valor);
    this.view.mostrarSeleccion(this.model.getValueA());
  }

  handleUpdateB(valor){
    console.log(`VALOR DE B: ${valor}`);
    this.model.setValueB(valor);
    this.view.mostrarSeleccion(this.model.getValueB());
  }

}

// Instanciar
const app = new selectionController(new SelectionModel(), new SelectionView());

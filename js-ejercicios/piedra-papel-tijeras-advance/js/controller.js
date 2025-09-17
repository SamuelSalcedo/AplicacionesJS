// controller.js
import { SelectionModel } from "./model.js";
import { SelectionView } from "./view.js";

class selectionController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Inicializar vista
    this.view.mostrarSeleccion(this.model.getValueA());

    // Eventos
    this.view.bindSelection(this.handleSelection.bind(this))
    //this.view.bindDecrement(this.handleDecrement.bind(this));
  }

  jugarSeleccion(selection){
    //este es el value del boton
    this.model.setValueA(selection);
    this.model.play();
  }


  handleSelection(valor){
    console.log(valor);
    this.model.setValueA(valor);
    this.view.mostrarSeleccion(this.model.getValueA());
  }

}

// Instanciar
const app = new selectionController(new SelectionModel(), new SelectionView());

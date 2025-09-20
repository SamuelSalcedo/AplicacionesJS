// model.js
export class SelectionModel {
  constructor() {


    this.opciones= {
      empate:0,
      piedra:1,
      papel:2,
      tijeras:3
    }

    this.a=0;
    this.b=0;

    this.ganador =0;
  }

  setGanador(){
    console.log('valores:');

    console.log(this.a);
    console.log(this.b);

    const calculo = Math.abs(this.a - this.b);
    if(this.a === this.b){
      this.ganador =0;
    }else if(calculo === 1){
      this.ganador =  this.a > this.b ? this.a:this.b;
    }else{
      this.ganador = this.a < this.b ? this.a : this.b;
    }

  }
  
  getGanador(){
    console.log(this.ganador)
    return Object.keys(this.opciones).find( key => this.opciones[key] === this.ganador );
  }

  //selector se usa como variable para encontrar el key que coincida
  //si este valor es nulo o no valido en vez de que salte un error se da como 0
  setValueA(selector){
    this.a = this.opciones[selector] || 0;
  }

  setValueB(selector){
    this.b = this.opciones[selector] || 0;
  }


  getValueA() {
    return this.a;
  }

  getValueB() {
    return this.b;
  }
}

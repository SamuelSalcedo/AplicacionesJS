// model.js
export class SelectionModel {
  constructor() {


    this.opciones= {
      empate:0,
      piedra:1,
      papel:2,
      tijeras:3,
      //intentando crear 2 opciones mas
      serpiente:4,
      humano:5
    }
/*
    this.a=0;
    this.b=0;

    this.ganador="";
  */
  this.setReset();
  this.getReset();
 }

  setGanador(valor){
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

  //todo el juego es ahora desde 0
  setReset(){
    this.a = 0;
    this.b = 0;
    this.ganador = "SIN JUGADAS ";
  }

  getReset(){
    return "SIN JUGADAS";
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

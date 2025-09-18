// model.js
export class SelectionModel {
  constructor() {
    this.piedra = 1;
    this.papel = 2;
    this.tijeras =3;

    this.a=0;
    this.b=0;

    this.ganador =0
  }
  

  setGanador(){
    if ((this.a - this.b)==1){
      this.ganador = this.a;
    }else if ((this.a - this.b)==2){
      this.ganador = this.b;
    }else{
      this.ganador;
    }
  }
  
  getGanador(){
    console.log(this.ganador)
    return this.ganador;
  }

  setValueA(selector){
    if(selector == 'piedra'){
      this.a = this.piedra;
    }else if(selector == "papel"){
      this.a = this.papel;
    }else if(selector == 'tijeras'){
      this.a = this.tijeras;
    }
    else{
      this.a = 0;
    }
    console.log(this.a);
  }

  setValueB(selector){
    if(selector == 'piedra'){
      this.b = this.piedra;
    }else if(selector == "papel"){
      this.b = this.papel;
    }else if(selector == 'tijeras'){
      this.b = this.tijeras;
    }
    else{
      this.b = 0;
    }
      console.log(this.b);

  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  getValueA() {
    return this.a;
  }


  getValueB() {
    return this.b;
  }
}

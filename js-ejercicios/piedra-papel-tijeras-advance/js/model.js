// model.js
export class SelectionModel {
  constructor() {
    this.piedra = 1;
    this.papel = 2;
    this.tijeras =3;

    this.a=0;
    this.b=0;

  }
  

  play(a, b){
    if ((a - b)==1){
      return a;
    }else if ((a - b)==2){
      return b;
    }else{
      return 0;
    }
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

  setValueB(b){
    return this.b = b;
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
}

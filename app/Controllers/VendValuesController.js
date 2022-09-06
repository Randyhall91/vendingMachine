import { appState } from "../AppState.js";
import { vendValuesService } from "../Services/VendValuesService.js";



function _drawItems() {
  let snacks = appState.snacks
  let template = ''
  snacks.forEach(s => template += s.Template);
  // @ts-ignore
  document.getElementById('snacks').innerHTML = template
}



export class VendValuesController {
  constructor() {

    console.log("controller says hello");
    _drawItems()
  }
  vend(item) {
    console.log('Vend+1');
    vendValuesService.vend(item)
    _drawItems()
  }
  hello() {
    console.log('hello');
  }
}
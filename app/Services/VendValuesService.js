import { appState } from "../AppState.js";



class VendValuesService {
  vend(item) {
    let items = appState.snacks.find(s => s.name == item)
    console.log(items);

    console.log('service says hello');
  }
}

export const vendValuesService = new VendValuesService()
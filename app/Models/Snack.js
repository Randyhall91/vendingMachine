



export class Snack {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
  addsnack() {
    console.log('addsnacks');
  }

  get Template() {
    return `
    <div class="col-md-4 text-center">
          <p>🍫</p>
          <div>
            <button class="btn btn-secondary" onclick="app.vendValuesController.hello()">Buy ${this.name} at $${this.price}</button>
          </div>
        </div>
    `
  }

}




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
          <img src="https://thiscatdoesnotexist.com" class="img-size" alt="">
          <div>
            <button class="btn btn-secondary" onclick="app.vendValuesController.hello()">Hello</button>
          </div>
        </div>
    `
  }

}
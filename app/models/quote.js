export default class Quote {
  constructor(data) {
    this.author = data.quote.author
    this.body = data.quote.body

  }

  get Template() {
    return `
    
    <h5>${this.body} - ${this.author}</h5>
    
    
    `
  }


}
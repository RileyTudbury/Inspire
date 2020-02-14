export default class Quote {
  constructor(data) {
    this.author = data.quote.author
    this.body = data.quote.body

  }

  getTemplate() {
    return ``
  }


}
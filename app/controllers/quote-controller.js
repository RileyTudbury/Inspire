
import quoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function _drawQuote() {

}


export default class QuoteController {
  constructor() {

    store.subscribe("quote", _drawQuote)

    quoteService.getQuote()
  }







}


import store from "../store.js"
import imageService from "../services/image-service.js";


//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawBackground() {

  let image = store.State.image
  document.querySelector("body").style.backgroundImage = `url(${image.url})`

}

function _drawCopyright() {
  let image = store.State.image
  document.getElementById("image-credit").innerHTML = `<h6>From: ${store.State.image.site}</h6>`
}


export default class ImageController {
  constructor() {

    store.subscribe("image", _drawCopyright)
    store.subscribe("image", _drawBackground)

    imageService.getImage()
  }



}

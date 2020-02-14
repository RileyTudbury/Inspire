import store from "../store.js"
import Image from "../models/image.js"



// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  getImage() {
    debugger
    imgApi
      .get("")
      .then(res => {
        let results = new Image(res.data)
        console.log("FROM GET IMAGE", res.data)
        store.commit("image", results)
      })
      .catch(err => {
        throw new Error(err)
      })
  }

}

const imageService = new ImageService();
export default imageService;

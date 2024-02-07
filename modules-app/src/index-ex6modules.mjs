import ProductService from "./services/product.service.mjs";


function main() {
    let productservice = new ProductService()
    console.log(productservice.findAll())
}
main()
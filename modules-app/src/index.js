import CustomerService from "./services/customer.service.js";


function main() {
    let customerService = new CustomerService()
    console.log(customerService.findAll())
}
main()
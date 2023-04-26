const { ClientUseCase} = require("../useCases/clientUseCase");

class ClientController{

exec(req, res){
    const newCustomer = req.body;
    const useCase = new ClientUseCase();
    console.log(newCustomer);
    if (!newCustomer.name || !newCustomer.rg || !newCustomer.checkingAccount) {
      console.log("Attention missing parameters!");
      return res.status(400).send("Attention missing parameters!");
    }
    const listClient = useCase.run(newCustomer);
    return res.status(200).json(listClient);
   }
}
module.exports = { ClientController };
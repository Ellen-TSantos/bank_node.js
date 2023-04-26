const { RepositoryClient } = require("../repositories/repositoryClient");


  class ClientUseCase {
    run (newCustomer) {
      const repositoryClient = new RepositoryClient();
      const foundClient = repositoryClient.findByNameRgAccount(newCustomer.name, newCustomer.rg,
                       newCustomer.checkingAccount);
      if (foundClient) {
        console.log("Existing data in the system!");
        return("Existing data in the system!");
        
      }
      
      return repositoryClient.save(newCustomer);
      
    }
    
  };
module.exports = { ClientUseCase };

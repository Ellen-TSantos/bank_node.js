const customerData = require("../infraData/dataBase/data");

class RepositoryClient {
    findByNameRgAccount( name, rg, checkingAccount ) {
    return customerData.find(customerDat =>  customerDat.name === name || customerDat.rg === rg
             || customerDat.checkingAccount === checkingAccount);
  }

  save(newCustomer) {
    const profileSize = customerData.length;
    const lastClient = customerData[profileSize - 1];
    let nextId = lastClient.id;
    customerData.push({ id: ++nextId, ...newCustomer });
    return customerData
  };
}

module.exports = { RepositoryClient };

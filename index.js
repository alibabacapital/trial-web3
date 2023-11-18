const Web3 = require('web3');

// Ethereum ağına yerel bir bağlantı oluşturun
const web3 = new Web3('http://localhost:8545');

// Örnek bir hesap adresi alın
web3.eth.getAccounts().then(accounts => {
  console.log('Accounts:', accounts);
});

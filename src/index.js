const { ethers } = require("ethers");
const { getJsonWalletAddress } = require("ethers/utils");

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    document.getElementById("connectButton").innerHTML = "Connected";
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install MetaMask";
  }
}

async function execute() {
  if (typeof window.ethereum !== "undefined") {
    contractAddress = "";
    const abi = [
];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      await contract.store(42);
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML =
      "Please install MetaMask";
  }
}

module.exports = {
  connect,
  execute,
};



    
  
 // Chama a função adicionarUsuario do contrato
contract.methods.adicionarUsuario(imei, enderecoCarteira, valorAtivo).send({from: web3.eth.defaultAccount})
.then(receipt => {
    // a transação foi bem sucedida
    console.log('Usuário adicionado com sucesso:', receipt);
})
.catch(error => {
    // ocorreu um erro na transação
    console.error('Erro ao adicionar usuário:', error);
});

const form = document.getElementById('form-adicionar-usuario');

form.addEventListener('submit', (event) => {
  event.preventDefault();

// Exemplo de como chamar a função adicionarUsuarios
    // Obtém os valores do formulário
    const imei = document.getElementById("IMEI").value;
    const walletAdress = document.getElementById("walletAdress").value;
    const valorAtivo = document.getElementById("valorAtivo").value;
 
     // Faz o que quiser com os valores do formulário e o endereço da carteira
     console.log("IMEI:", imei);
     console.log("Valor Ativo:", valorAtivo);
     console.log("Endereço da Carteira:", walletAdress);
     const enderecoCarteira = window.ethereum.selectedAddress;
    contract.methods.adicionarUsuario(imei,valorAtivo, getJsonWalletAddress).send({from: web3.eth.defaultAccount})
    .then(receipt => {
      // a transação foi bem sucedida
      console.log('Usuário adicionado com sucesso:', receipt);
    })
    .catch(error => {
      // ocorreu um erro na transação
      console.error('Erro ao adicionar usuário:', error);
    });
});
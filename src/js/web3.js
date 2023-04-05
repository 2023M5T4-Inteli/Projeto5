
    //Função para conectar o Metamask
    let account;
        const connectMetamask = async () => {
            if(window.ethereum !== "undefined") {
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
                account = accounts[0];
                document.getElementById("userArea").innerHTML = `User Account: ${account}`;
            }
        }
      
      

        const connectContract = async () => {
            const ABI = [
	{
		"inputs": [
			{
				"internalType": "bytes15",
				"name": "_imei",
				"type": "bytes15"
			},
			{
				"internalType": "uint256",
				"name": "_valorAtivo",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_endereco",
				"type": "address"
			}
		],
		"name": "adicionarUsuarios",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_endereco",
				"type": "address"
			}
		],
		"name": "depositarInicial",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_endereco",
				"type": "address"
			}
		],
		"name": "entrarGrupo",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renovarContrato",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nomeGrupo",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_minimoParticipantes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maximoParticipantes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_taxAdmin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_duracaoDias",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "participante",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "valor",
				"type": "uint256"
			}
		],
		"name": "novoParticipanteGrupo",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "reservaRisco",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dataInicio",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dataValidade",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "duracaoDias",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maximoParticipantes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "meuGrupo",
		"outputs": [
			{
				"internalType": "string",
				"name": "nomeGrupo",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "saldoTotal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "qntparticipantes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minimoParticipantes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maximoParticipantes",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "seguradora",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "taxAdmin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dataInicio",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dataValidade",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "duracaoDias",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nomeGrupo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "qntParticipantes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "quantidadeParticipantes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_endereco",
				"type": "address"
			}
		],
		"name": "saldoParticipante",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "saldoTotalGrupo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "taxaAdmin",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

            const Address = "0xF5d85F1c7E12287ACf06F0d4b5fDE6d61C9e9361";
            window.web3 = await new Web3(window.ethereum);
            window.contract = await new window.web3.eth.Contract(ABI, Address);
            document.getElementById("contractArea").innerHTML = "Connected to Contract";
        }

   
        const getSaldoGrupo = async () => {
            const data = await window.contract.methods.saldoTotalGrupo().call();
            document.getElementById("balanceArea").innerHTML = `Contract Balance: ${data}`;
        }

        const depositContract = async () => {
            const amount = document.getElementById("ativo").value;
            const imei = document.getElementById("imei").value;
            const endereco = document.getElementById("endereco").value;
            await window.contract.methods.adicionarUsuarios(imei,amount,endereco).send({from: account, value: amount});
        }

        const withdraw = async () => {
        const receb = document.getElementById("amountInput").value;
        await window.contract.methods.withdraw(receb).send({ from: account });
}

        const qntParticipantes = async () => {
            const data = await window.contract.methods.qntParticipantes().call();
            document.getElementById("participantes").innerHTML = `Número de Participantes no Grupo: ${data}`;
        }

		const maxPessoas = async () => {
            const data = await window.contract.methods.minParticipantes().call();
            document.getElementById("min").innerHTML = `Número de Mínimo de Participantes no Grupo: ${data}`;
        }
		
		const grupoTax = async () => {
            const data = await window.contract.methods.taxAdmin().call();
            document.getElementById("tax").innerHTML = `Taxa Administrativa: ${data}`;
        }
		const nomeGrupo = async () => {
            const data = await window.contract.methods.nomeGrupo().call();
            document.getElementById("nomeGrupo").innerHTML = `Nome do Grupo: ${data}`;
        }

   


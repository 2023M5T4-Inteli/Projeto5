// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "remix_tests.sol"; // this import is automatically injected by Remix.

import "tests/test.sol"; //

contract CooverTest {

struct Grupo {
    string nomeGrupo; // Nome do grupo de segurados
    uint256  saldoTotal; // Saldo total do grupo no contrato
    uint256 qntparticipantes; // Número de Participantes no grupo
    uint256 minimoParticipantes; // Número mínimo de Participantes para o grupo
    uint256 maximoParticipantes; // Número máximo de Participantes para o grupo
    address[]  participantes; //Array com os endereços dos participantes
    address payable seguradora; // endereço do criador do smart contract (owner)
    uint256 taxAdmin; //Taxa para entrar no grupo
    uint256 dataInicio; //Data de crição do contrato
    uint256 dataValidade; //Data do término do contrato
    uint256 duracaoDias; // Dias totais do contrato

}

    Coover coover; // instância do contrato Coover

     Grupo public meuGrupo; //Objeto do grupo

     

    
    function beforeAll() public {
        // inicializa o contrato antes de cada teste
        meuGrupo.nomeGrupo = "Meu Grupo";
        meuGrupo.minimoParticipantes = 2;
        meuGrupo.maximoParticipantes = 10;
        meuGrupo.taxAdmin = 0.1 ether;
        meuGrupo.duracaoDias = 30;
         coover = new Coover(meuGrupo.nomeGrupo, meuGrupo.minimoParticipantes, meuGrupo.maximoParticipantes, meuGrupo.taxAdmin, meuGrupo.duracaoDias);
        
    
    }
    
    

    function checkConstructor() public {
        // verifica se as variáveis do construtor foram definidas corretamente
        Assert.equal(meuGrupo.nomeGrupo, "Meu Grupo", "Nome do grupo incorreto");
        Assert.equal(meuGrupo.minimoParticipantes, 2, "Minimo de participantes incorreto");
        Assert.equal(meuGrupo.maximoParticipantes, 10, "Maximo de participantes incorreto");
        Assert.equal(meuGrupo.taxAdmin, 0.1 ether, "Taxa de entrada incorreta");
        Assert.equal(meuGrupo.duracaoDias, 30, "Duracao do contrato incorreta");
    }

     function viewtaxAdmin() public {
        coover.taxaAdmin();
        Assert.equal(meuGrupo.taxAdmin, 0.1 ether, "Taxa admin incorreta");
    }

}






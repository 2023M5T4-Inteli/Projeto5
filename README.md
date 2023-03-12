# Projeto5

# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="https://www.inteli.edu.br/wp-content/uploads/2021/08/20172028/marca_1-2.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Seguros mútuos com Smart Contracts via Blockchain

## VanCoover
![image](https://user-images.githubusercontent.com/99209230/221455296-381a9298-fe58-45e8-b25f-d097605a77d9.png)

- <a href="https://www.linkedin.com/in/vit%C3%B3ria-rodrigues-de-oliveira-bb955921b/">Vitória Rodrigues de Oliveira </a>
- <a href="https://www.linkedin.com/in/gustavo-monteiro-1a499919a/">Gustavo Monteiro</a>
- <a href="https://www.linkedin.com/in/thainadedeus/">Thainá Lima</a>
- <a href="https://www.linkedin.com/in/gabriel-rocha-pinto-santos-/">Gabriel Rocha Pinto Santos</a>
- <a href="https://www.linkedin.com/in/daniel-barzilai-061036234/">Daniel Barzilai</a>
- <a href="https://www.linkedin.com/in/rodrigo-moraes-martins-/">Rodrigo Moraes Martins</a>

## 📝 Descrição da solução 

A solução deste projeto consiste em uma aplicação em Web3 para seguro P2P de smartphones usados contra roubo/furto. A Seguradora P2P é responsável por criar e parametrizar um novo grupo de seguro P2P, aprovação dos pedidos de indenização em caso de sinistro, enquanto o participante do grupo(cliente) paga pelo seguro, podendo  acionar o smart contract com um pedido de indenização. O escopo do MVP inclui simplificações nas regras de negócio, como a definição dos participantes do grupo de seguro no momento da criação e a não utilização de fatores de risco individuais na composição de preços.

## 📁 Estrutura de pastas


|--> Documentação<br>
  &emsp;| DocumentaçãoProjetoModulo5.docx.pdf<br>
|--> Smart_Contract<br>
&emsp;| smartContract<br>
|--> Frontend<br>
|--> Backend<br>
 
| readme.md<br>


## 💻 Smart Contract 
O Smart Contract, como forma automatizada e assertiva, será responsável por exercer os acordos da seguradora com os participantes dentro de um grupo mútuo.

## Requisitos de negócio:
<br>
<br>
--> Regra de negócio 1: Os valores pagos pelos participantes serão proporcionais ao valor indenizável associado a cada aparelho, definido no momento da confirmação de adesão, e o pagamento de indenização será limitado ao valor protegido efetivamente (de acordo com a reserva atual dele) para cada cliente;
<br>
<br>
--> Regra de negócio 2: A Coover é administradora e criadora dos grupos, tendo que adicionar os participantes dos grupos, os quais tem que informar o imei(será transformado em hash) do aparelho, e uma taxa administrativa será aplicada para a entrada do grupo
<br>
<br>
--> Regra de negócio 3: Para a indenização ser concluída, a Coover tem que aprova-lo 
<br>
<br>
--> Regra de negócio 4: O membro do grupo pode repor sua reserva
<br>
<br>
--> Regra de negócio 5:  Os recursos depositados pelos participantes ficarão no smart contract (DAO), com saldo individual para cada participante, e a Seguradora P2P não deve possuir capacidade de acessar esses recursos, senão pelas regras de governança estabelecidas no smart contract.

## Diagrama de Blocos

![image](https://user-images.githubusercontent.com/99209230/221454880-b20faa51-ca37-4822-8030-d9cc90931a89.png)

## UML
### Pedido de Adesão

![image](https://user-images.githubusercontent.com/99209230/221448077-f81307a6-18cb-49c2-ae21-9635979dfbd8.png)
<br>
Figura 8 - Diagrama sequencial do processo de pedido de adesão, mostrando as interações entre o Cliente e a Interface Web com MetaMask e o SmartContract (TestNet). Atenção: O diagrama considera a autenticação da identificação do usuário na Interface Web com MetaMask como bem sucedida.
Com o fluxo para o pedido de adesão de um cliente (Figura 8), o sistema permite que o cliente solicite a adesão de um contrato através de uma Interface Web contactada à MetaMask. O cliente solicita os contratos disponíveis para o sistema utilizando uma Interface Web (1.1), que requisita ao SmartContract no servidor de teste TestNet (2.1), retornando os contratos disponíveis para a Interface (2.2), mostrando na tela para o Cliente visualizar (1.2).
Com isso o usuário pode selecionar um contrato dentre os disponíveis, confirmar a seleção (3.1), e o sistema verifica os grupos disponíveis para este contrato no SmartContract (4.1), retornando para a Interface o registro e a confirmação da requisição (4.2), mostrando uma mensagem para o usuário do sucesso da requisição feita (3.2).
Todo esse processo é realizado de forma sequencial, onde o sistema deve garantir que as interações do Cliente com a Interface Web sejam registradas corretamente.
Após o Cliente realizar o pedido de adesão, o processo continua com a avaliação de um administrador do parceiro de projeto Coover, que pode aprovar ou rejeitar a solicitação. O diagrama a seguir apresenta as etapas do processo de avaliação e aprovação do administrador Coover.

![image](https://user-images.githubusercontent.com/99209230/221448541-aa0a8ff7-e884-4161-b703-af3395062cfb.png)
<br>
Figura 9 - Diagrama sequencial do processo de aceitação de um pedido de adesão feito por um cliente, mostrando as interações entre um administrador (Adm Coover) e a Interface Web Admin com MetaMask e o SmartContract (TestNet). Atenção: O diagrama considera a autenticação da identificação do usuário na Interface Web Admin com MetaMask e MetaMask do Solicitante como bem sucedida..
O diagrama (Figura 9) ilustra o fluxo do administrador, que possui várias etapas do processo de análise de um pedido de adesão, até sua aprovação.
A primeira etapa é a requisição para visualização da situação dos contratos em aberto a partir do administrador (1.1), através da Interface Web de Administrador que requisita no SmartContract a situação dos contratos em aberto (2.1). O retorno bem-sucedido da requisição permite que o SmartContract forneça a informação na tela da Interface Web (2.2), possibilitando a visualização pelo usuário deste sistema (1.2) permitindo a avaliação dos contratos em aberto.
A segunda etapa se assemelha à primeira, onde o usuário solicita os pedidos de adesão não atendidos através da Interface Web de administrador (3.1), que por sua vez requisita a informação do SmartContract no TestNet (4.1), que retorna à Interface as informações requisitadas (4.2), possibilitando a análise das informações pelo usuário (3.2).
Com essas informações, o administrador pode selecionar e aprovar um pedido de adesão de um cliente, utilizando a Interface Web de administrador (5.1), que envia a aprovação do pedido ao SmartContract (6.1), onde um código será executado para fazer uma solicitação de transferência de recursos ao SmartContract, a partir da carteira do usuário solicitante através do MetaMask (7.1), que por sua vez irá notificar o Cliente para aprovação ou rejeição da transferência (8.1). Ao aprovar (8.2), os recursos saem do MetaMask para o SmartContract com o valor de entrada do contrato, registrando na rede a adesão do Cliente solicitante e a transferência dos recursos (7.2), retornando à Interface Web de administrador que a transferência foi realizada e registrada no SmartContract (6.2).
Cada uma das etapas é importante para garantir a segurança e eficiência do processo de adesão de clientes no SmartContract. O administrador podendo aceitar ou rejeitar pedidos de adesão permite a atribuição de critérios próprios para essas decisões, antes de solicitar a transferência de recursos do usuário, caso este seja rejeitado. A transferência do valor, por sua vez, garante que o membro está comprometido financeiramente com os recursos do seguro mútuo do grupo, que apenas finaliza sua aprovação de entrada após o pagamento.

### Pedido de Indenização
![image](https://user-images.githubusercontent.com/99209230/221448684-a5684860-6b83-4522-a807-c2a241063206.png)
<br>
Figura 10 - Diagrama sequencial do processo de pedido de indenização, mostrando as interações entre o Cliente e a Interface Web com MetaMask e o SmartContract (TestNet). Atenção: O diagrama considera a autenticação da identificação do usuário na Interface Web com MetaMask como bem sucedida.
A partir de um contrato ativo, o diagrama (Figura 10) ilustra o processo de um pedido de indenização de um cliente.
Neste processo, o Cliente inicia solicitando a situação de seus contratos ativos por meio da Interface Web com MetaMask (1.1), onde a requisição é feita para o SmartContract (2.1), onde a informação é retornada para a Interface (2.2) permitindo a análise da situação dos contratos em que o usuário faz parte (1.2).
Quando o cliente decide fazer a solicitação de uma indenização (3.1), a Interface Web envia a requisição e registra esse pedido no SmartContract (4.1), que sendo bem sucedida, retorna para a Interface que a solicitação foi feita (4.2), mostrando para o usuário que a solicitação foi realizada (3.2).
A avaliação do pedido de indenização é realizada por um administrador que verifica os pedidos de indenização não atendidos. O processo de aceitação de um pedido de indenização está ilustrado no diagrama a seguir:


![image](https://user-images.githubusercontent.com/99209230/221448750-f94d4c50-4caa-449d-86f8-95113cb27932.png)
<br>
Figura 11 - Diagrama sequencial que descreve o processo de aceitação de pedido de indenização por um administrador (Adm Coover) por meio de uma Interface Web Admin com MetaMask e o SmartContract (TestNet). Atenção: O diagrama considera a autenticação da identificação do usuário na Interface Web Admin com MetaMask e MetaMask do Solicitante como bem sucedida..
O comportamento esperado do sistema descrito no diagrama (Figura 11) é que, ao receber a solicitação de indenização feito por um cliente, o administrador (Adm Coover) deve verificar a situação dos contratos ativos (1.1), através da Interface Web de administrador, que requisita a informação ao SmartContract (TestNet) (2.1), retornando a informação na tela (2.2) para o administrador visualizar os contratos ativos (1.2).
Em seguida, devem ser verificados os pedidos de indenização em aberto com solicitações pendentes, pelo usuário administrador utilizando a Interface Web de administrador (3.1), que também requisita a informação ao SmartContract (4.1), retornando à Interface (4.2) as informações para o usuário (3.2).
Caso o pedido seja aprovado pelo usuário administrador através da Interface Web de administrador (5.1), a requisição de transferência de recursos para o solicitante é feita e registrada na blockchain (6.1), que transfere esses recursos diretamente para a carteira do MetaMask (7.1). Após a transferência, o SmartContract registra que a transferência foi realizada e devolve a informação de sucesso para a Interface Web de administrador (6.2) que visualiza a mensagem de sucesso na tela (5.2).
Vale destacar que a ordem das etapas é muito importante, pois o registro da aprovação da transferência e o registro da transferência efetuada garantem a segurança do que foi realizado, podendo identificar problemas caso a transferência tenha sido aprovada e registrada, mas não tenha sido realizada, e registrando apenas após a transferência ter sido feita, e não antes. Além de maior segurança, também garante a transparência das transações, reduzindo custos e intermediários nos processos na forma tradicional.

### Reposição de Risco
![image](https://user-images.githubusercontent.com/99209230/221448856-dde165c7-7f8d-4162-a466-a206573ccc52.png)
<br>
Figura 12 - Diagrama sequencial que descreve o processo de reposição de recursos da reserva de risco de um cliente, mostrando as interações entre o Cliente e a Interface Web com MetaMask e o SmartContract (TestNet). Atenção: O diagrama considera a autenticação da identificação do usuário na Interface Web com MetaMask como bem sucedida.
Este diagrama sequencial (Figura 12) descreve o comportamento esperado do sistema em uma operação de reposição de reserva de risco por parte do cliente. O processo se inicia com a verificação do Cliente pela quantidade de recursos disponíveis a partir da Interface Web (1.1). A seguir a Interface requisita do SmartContract a situação atual dos recursos (2.1), que retorna para a Interface a informação solicitada (2.2), que permite sua visualização por parte do cliente (1.2).
Considerando que os recursos não estejam no seu valor total, o Cliente faz uma solicitação de reposição de recursos utilizando a Interface Web (3.1), que envia a solicitação para o SmartContract (4.1), que calcula a diferença no valor depositado com o valor total, retornando uma requisição de transferência para a Interface Web que está ligada ao MetaMask do Cliente (4.2). O MetaMask através da Interface Web solicita uma autorização de transferência de recursos (3.2), e assim que for aprovada pelo Cliente (3.3), Transfere os recursos para o SmartContract e registra essa transferência (5.1).
Com isso, o SmartContract retorna para a Interface Web a atualização da situação dos recursos do usuário (5.2), que pode ver na tela os recursos atuais disponíveis (6.1).
O processo de reposição de recursos da reserva de risco é fundamental para garantir a cobertura total do serviço contratado, ajudando a manter a solvência da empresa, permitindo recursos disponíveis para cobrir riscos e indenizações do grupo de seguro mútuo. O diagrama ainda destaca a importância de registrar a transferência bem sucedida, assim que for efetuada, trazendo mais segurança e transparência no processo.





## 📝 Diário de bordo
### Deploy

Inicialmente, conferimos se o código estava sem erros no Visual Code e se as funções estão funcionando corretamente no Remix IDE. <br>
Com a certeza de que o código está sem erros aparentes, no Visual Code, fizemos a instalação do "Truffle" no command prompt. <br>
A iniciação do truffle conectado ao repositória do GitHub, criam pastas específicas para o deploy, além de serem necessárias a criação de arquivos ".Js".<br>
Após a execução dos comandos de criação do "package.jason" e instalação da biblioteca  @openzeppelin/contracts, era necessário a obtenção de uma API key a partir do Infura (plataforma de APIs de Blockchain). <br>
Com todo o setup instalado, a tentativa de deploy foi iniciada. <br>
1 - A primeira tentativa foi utilizando o goerli, mas o erro era associado aos parâmetros do contrato passados no deploy; <br>
2- Dessa forma, na segunda vez, tentamos a utilização de outro contrato, sem parâmetros especificados, e outro erro foi identificado. Segue a imagem abaixo: <br>

<br>
<img width="2000" alt="image (6)" src="https://user-images.githubusercontent.com/99210798/224570908-b8181a37-7c3f-4237-8a08-b0a8d32dcb4b.png">
<br>

3- O erro persistiu mesmo após a instalação dos comandos abaixo, em uma quarta tentativa:
```sh
 npm i -D hardhat @nomiclabs/hardhat-ethers @typechain/ethers-v5 @types/node@^14 typechain ts-node ethers typechain prettier prettier-plugin-solidity prettier-config-solidity dotenv @typechain/hardhat

```
<img width="700" alt="image (9)" src="https://user-images.githubusercontent.com/99210798/224572193-f6a1d8a3-fd20-4e33-b4d5-d0e7ecec5e6d.png">

![image](https://user-images.githubusercontent.com/99210798/224572338-4b9a63d1-225e-47d7-a1ff-4a76395ef668.png)

4- Por saber pouco a respeito do deploy na rede Blockchain, haver instabilidade no Goerli, causando dificuldade no uso das carteiras, observada pelos outros grupos e provada na primeira e segunda tentativa, além de estarmos perto do prazo de entrega, mapeamos as outras possibilidades de realizar o deploy, mesmo que localmente; <br>
5- Sendo assim, o "Ganache", foi a nossa escolha, consolidando a quinta tentativa. Assim, utilizamos a carteira do "Ganache" para fazer o deploy do contrato;

```sh
 npm init -y 
```

```sh
  npx truffle compile 
```

```sh
 npx truffle migrate
```

6- Por fim, o Deploy foi realizado com sucesso. <br>

<img width="649" alt="image (11)" src="https://user-images.githubusercontent.com/99210798/224573092-6f446524-06a5-4f4f-be71-cf8e069c6c90.png">



## 🗃 Histórico de lançamentos

* 0.2.1 - 07/04/2023
    * Quinta entrega - Entrega Final
* 0.2.0 - 24/03/2023
    * Quarta entrega - 
* 0.1.1 - 10/03/2023
    * Terceira entrega - 
* 0.1.0 - 24/02/2023
    * Segunda entrega - Smart Contract e arquitetura da solução
* 0.0.1 - 10/02/2023
    * Primeira entrega - Modelo de negócios e arquitetura da solução

## 📋 Licença/License
<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/2023M5T4-Inteli/Projeto5">VanCoover  <a> by </a> <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2023M5T4-Inteli/Projeto5#readme">Inteli, <a href="https://www.linkedin.com/in/vit%C3%B3ria-rodrigues-de-oliveira-bb955921b/">Vitória Rodrigues de Oliveira	</a>, <a href="https://www.linkedin.com/in/gustavo-monteiro-1a499919a/"> Gustavo Monteiro</a>, <a href="https://www.linkedin.com/in/thainadedeus/">Thainá Lima</a>, <a href="https://www.linkedin.com/in/gabriel-rocha-pinto-santos-/" >Gabriel Rocha Pinto Santos </a>, <a href="https://www.linkedin.com/in/daniel-barzilai-061036234/">Daniel Barzilai	</a>, <a href="https://www.linkedin.com/in/rodrigo-moraes-martins-/">Rodrigo Moraes Martins</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.

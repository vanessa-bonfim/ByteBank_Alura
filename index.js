import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 =  new Cliente("Sarah", 11122233310);
const cliente3 = new Cliente("Alice", 11122233311);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(150);

const contaCorrenteSarah = new ContaCorrente(1002, cliente2);
contaCorrenteSarah.depositar(1800);

const contaCorrenteAlice = new ContaCorrente(1003, cliente3);

contaCorrenteRicardo.transferir(200, contaCorrenteSarah);
contaCorrenteSarah.transferir(200, contaCorrenteAlice);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteSarah);
console.log(contaCorrenteAlice);
console.log(`Número de contas: ${ContaCorrente.numeroDeContas}`);
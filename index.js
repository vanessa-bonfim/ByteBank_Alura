import { Cliente } from "./Conta/Cliente.js";
import { Conta } from "./Conta/Conta.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";


const cliente1 = new Cliente("Ricardo", 11122233309);
/* const cliente2 =  new Cliente("Sarah", 11122233310);
const cliente3 = new Cliente("Alice", 11122233311); */

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(150);

/* const contaCorrenteSarah = new ContaCorrente(1002, cliente2);
contaCorrenteSarah.depositar(1800);

const contaCorrenteAlice = new ContaCorrente(1003, cliente3);

contaCorrenteRicardo.transferir(200, contaCorrenteSarah);
contaCorrenteSarah.transferir(200, contaCorrenteAlice); */

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
/* contaPoupanca.sacar(10); */


const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

/* const conta = new Conta(0, cliente1, 1001); */
/* console.log(contaPoupanca);

console.log(contaCorrenteRicardo); */
/* console.log(contaCorrenteSarah);
console.log(contaCorrenteAlice); */
/* console.log(`Número de contas: ${ContaCorrente.numeroDeContas}`); */

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);
/* console.log(conta); */
console.log(contaSalario);
 
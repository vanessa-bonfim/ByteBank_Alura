import { Conta } from "./Conta/Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }
    sacar(valor) { //Método. Lembrando que esse método sobrescreve a classe Conta
        const taxa = 1.02;
        return this._sacar(valor, taxa); //Podemos usar também o super._sacar, pq não estamos sobrescrevendo e usando o da classe mãe
    }
}
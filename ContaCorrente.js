import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //publicos:
    static numeroDeContas = 0;
    agencia;

    //privados:
    _cliente;
    
    /**
     * Os assessores(set e get) são muito poderosos,
     * pois nos concedem acesso a propriedades privadas
     * ao mesmo tempo em que nos permitem definir uma regra de proteção dentro deles
    */
    set cliente(novoValor){ //protege nosso atributo privado
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente(){ 
        return this._cliente;
    }
    
    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){ //A inicialização de atributos é a principal responsabilidade do construtor.
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor) { //Método
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) { //Método
        if (valor <= 0) { //Se os valores forem negativos, não retorne nada. É mais comum ser declarado assim: if (valor > 0) return; , early return
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
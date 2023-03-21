export class Conta { //Esse tipo de classe que é pensada para não ser instanciada diretamente, é normalmente chamada de classe abstrata.
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo conta."); 
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        
      }

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
    
    get saldo(){
        return this._saldo;
    }

    sacar(valor) {

    }
    
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) { //Método
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
import { Conta } from "./Conta/Conta.js";

export class ContaCorrente extends Conta { // extends diz que CC tem uma herda(Herança) Conta.
    static numeroDeContas = 0;
    constructor(cliente, agencia) { //A inicialização de atributos é a principal responsabilidade do construtor.
        super(0, cliente, agencia); //É preciso chamar o construtor da classe Conta(classe pai) por meio dessa palavra especial super.
        ContaCorrente.numeroDeContas++;
    }

    /**
     * Se ele estiver em outro método, por exemplo,
     * se eu tivesse o sacar() aqui na ContaCorrente e
     * eu chamasse o super dentro do método sacar(),
     * esse super estaria chamando o método sacar()
     * da classe Contae não da classe ContaCorrente.
     * Então ele é uma palavra especial aqui e, no caso,
     * ele está chamando o construtor, porque eu estou chamando o super dentro do construtor. */


    sacar(valor) { //Método. Lembrando que esse método sobrescreve a classe Conta
        const taxa = 1.1;
        return this._sacar(valor, taxa); //Podemos usar também o super._sacar, pq não estamos sobrescrevendo e usando o da classe mãe
    }
}
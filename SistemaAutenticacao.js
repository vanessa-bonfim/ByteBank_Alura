/*
Ser autenticavel significa ter o método autenticar
ducky type

polimorfismo, onde tratamos objetos diferentes de uma maneira similar.
Temos nosso Diretor, nosso Gerente, nosso Cliente,
todos sendo tratados da mesma maneira pelo nosso sistema de autenticação,
já que é um único sistema de autenticação e
eu quero reutilizar código o máximo possível.
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) { //Interessa é que ele tem o comportamento e as propriedades específicas que eu estou utilizando. Não nos importamos tanto com o tipo de objeto.
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel //Essa chave autenticar existe dentro do objeto autenticavel. Se sim, retorna true.
        && autenticavel.autenticar instanceof Function // se é do tipo de uma função, se ele é uma instância de uma função, ele é um instanceof de função.
    }
}
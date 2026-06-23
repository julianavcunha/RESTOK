class Roupas {
    constructor(tipo, tamanho, preço, marca, cor) {
        this._tipo = tipo;
        this._tamanho = tamanho;
        this._preço = preço;
        this._marca = marca;
        this._cor = cor;
    }
    get tamanho() {
        if (tamanho === 'p' || 'm' || 'g' || 'xg') {
            return this._tamanho
        }
        else {
            "tamanho único"
        }
        
    };

    get preço() {
        return ('R$' + this._preço)
    };
}

class Vestidos extends Roupas {
    constructor(tamanho, preço, marca, cor, comprimento) {
        super(tamanho, preço, marca, cor);
        this._comprimento = comprimento;
    }
}

class Calças extends Roupas {
    constructor(tamanho, preço, marca, cor) {
        super(tamanho, preço, marca, cor);
    }
}

class Blusas extends Roupas {
    constructor(tipo, tamanho, preço, marca, cor) {
        super(tipo, tamanho, preço, marca, cor);
    }
}

class Casacos extends Roupas {
    constructor(tipo, tamanho, preço, marca, cor) {
        super(tipo, tamanho, preço, marca, cor);
    }
}

class Jaquetas extends Roupas {
    constructor(tipo, tamanho, preço, marca, cor) {
        super(tipo, tamanho, preço, marca, cor);
    }
}

const vestidoLaranja = new Vestidos ('m', 50, 'Peahi', 'laranja', 'médio');
console.log(vestidoLaranja);

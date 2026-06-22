class Roupas {
    constructor(tipo, tamanho, preço, marca, cor) {
        this._tipo = tipo;
        this._tamanho = tamanho;
        this._preço = preço;
        this._marca = marca;
        this._cor = cor;
    }
}

class Vestidos extends Roupas {
    constructor(tipo, tamanho, preço, marca, cor, comprimento) {
        super(tipo, tamanho, preço, marca, cor);
        this._comprimento = comprimento;
    }
}

class Calças extends Roupas {
    constructor(tipo, tamanho, preço, marca, cor) {
        super(tipo, tamanho, preço, marca, cor);
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
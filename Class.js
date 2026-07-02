class Roupas {
    constructor(tamanho, preço, marca, cor) {
        this._tamanho = tamanho;
        this._preço = preço;
        this._marca = marca;
        this._cor = cor;
        
    }

    showPrice() {
        return ('R$' + this._preço);
    }

    get preço() {
        return this._preço;
    }

}

class Vestidos extends Roupas {
    constructor(tamanho, preço, marca, cor, comprimento) { //medidas!
        super(tamanho, preço, marca, cor);
        this._comprimento = comprimento;
    }

    showCm() {
        return (this._comprimento + 'cm');
    }

    get comprimento() {
        return this._comprimento;
    }
}

class Calças extends Roupas {
    constructor(tamanho, preço, marca, cor) {
        super(tamanho, preço, marca, cor);
    }
}

class Blusas extends Roupas {
    constructor(tamanho, preço, marca, cor) {
        super(tamanho, preço, marca, cor);
    }
}

class Croppeds extends Roupas {
    constructor(tamanho, preço, marca, cor) {
        super(tamanho, preço, marca, cor); 
    }
}

class Casacos extends Roupas {
    constructor(tamanho, preço, marca, cor, tipo) {
        super(tamanho, preço, marca, cor);
    }
}

class Jaquetas extends Roupas {
    constructor(tamanho, preço, marca, cor, tipo) {
        super(tamanho, preço, marca, cor);
    }
}

const vestidoLaranja = new Vestidos ("M", 50, "Peahi", "Laranja", "Curto"); 
const vestidoVerde = new Vestidos ("GG", 40, "Aquamar", "Verde", "Curto"); 
const vestidoOficer = new Vestidos ("P", 55, "M. Officer", "Azul Marinho", "Curto"); 
const vestidoForever = new Vestidos ("GG", 30, "Forever 21", "Preto", "Curto"); 
const vestidoPreto = new Vestidos ("G", 20, "Sem Marca", "Preto", "Curto"); 
const vestidoIndiano = new Vestidos ("GG", 20, "Mahamaya Fashion", "Azul", "Curto"); 

const blusaFriends = new Blusas ("M", 25, "Renner", "Branca"); 
const blusaShein = new Blusas ("G", 15, "Shein", "Branca"); 
const blusaVeludo = new Blusas ("M", 45, "C&A", "Azul"); 
const blusaCanoa = new Blusas ("G", 30, "Renner", "Vermelha"); 

const cropBranco = new Croppeds ("M", 15, "Bluesteel", "Branco"); 
const cropAzul = new Croppeds ("M", 15, "Aquamar", "Azul"); 
const cropLaranja = new Croppeds ("M", 15, "Renner", "Branco"); 

const blueJeans = new Calças ("44", 45, "C&A", "Azul");

export default Roupas;



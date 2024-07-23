function Computador(marca, processador, memoria, ssd, sistemaOperacional) { //classe abstrata
    this.marca = marca;
    this.processador = processador;
    this.memoria = memoria;
    this.ssd = ssd;
    this.sistemaOperacional = sistemaOperacional;

    this.ligar = function() {
        console.log(this.ligar = marca + ' Ligou'); // Metodo 1
    }
    this.conectar = function() {
        console.log(this.conectar = 'Conectou'); // Metodo 2
    }
}

function ConfiguracaoLaptop(marca, processador, memoria, ssd, sistemaOperacional, tela) {
    Computador.call(this, marca, processador, memoria, ssd, sistemaOperacional); // Vai receber como herança os metodos da classe abstrata 'Computator()'
    this.tela = tela
}

function ConfiguracaoDesktop(marca, processador, memoria, ssd, sistemaOperacional, gabinete) {
    Computador.call(this, marca, processador, memoria, ssd, sistemaOperacional); // Vai receber como herança os metodos da classe abstrata 'Computator()'
    this.gabinete = gabinete;
}

const ConfiguracaoLaptop1 = new ConfiguracaoLaptop('Lenovo', 'intel core i5', 12, 512, 'Windows 11', '17"'); // instância 1
ConfiguracaoLaptop1.ligar();
ConfiguracaoLaptop1.conectar();
console.log(ConfiguracaoLaptop1);

const ConfiguracaoLaptop2 = new ConfiguracaoLaptop('Dell', 'intel core i3', 8, 256, 'Windows 10', '14"'); // instância 2
ConfiguracaoLaptop2.ligar();
ConfiguracaoLaptop2.conectar();
console.log(ConfiguracaoLaptop2);

const ConfiguracaoDesktop1 = new ConfiguracaoDesktop('Acer', 'intel core i7', 18, 512, 'Windows 11', 'ATX' ); // instância 3
ConfiguracaoDesktop1.ligar();
ConfiguracaoDesktop1.conectar();
console.log(ConfiguracaoDesktop1);

const ConfiguracaoDesktop2 = new ConfiguracaoDesktop('Dell', 'intel core i9', 36, 1024, 'Windows 11', 'EATX' ); // instância 4
ConfiguracaoDesktop2.ligar();
ConfiguracaoDesktop2.conectar();
console.log(ConfiguracaoDesktop2);
class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
  }

  trabalhar() {
    console.log(`Funcionário ${this.nome} está trabalhando.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(`Gerente ${this.nome} está gerenciando o departamento ${this.departamento}.`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`Desenvolvedor ${this.nome} está programando em ${this.linguagem}.`);
  }
}



const gerente = new Gerente('Ana', 40, 'Gerente', 'Vendas');
gerente.seApresentar();
gerente.gerenciar();

const desenvolvedor = new Desenvolvedor('João', 30, 'Desenvolvedor', 'JavaScript');
desenvolvedor.seApresentar();
desenvolvedor.programar();

function exibirErro(mensagem) {
  const elementoErro = document.getElementById('erro');
  elementoErro.textContent = mensagem;
  elementoErro.classList.add('visivel');
}

try {
  // Obter valores do formulário
  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);
  const cargo = document.getElementById('cargo').value;
  const departamento = document.getElementById('departamento').value;
  const linguagem = document.getElementById('linguagem').value;

  // Validar valores
  if (!nome || !idade || !cargo) {
    throw new Error('Preencha todos os campos obrigatórios!');
  }

  // Criar instâncias
  const funcionario = new Funcionario(nome, idade, cargo);
  let gerente;
  let desenvolvedor;

  if (cargo === 'Gerente') {
    gerente = new Gerente(nome, idade, cargo, departamento);
  } else if (cargo === 'Desenvolvedor') {
    desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
  } else {
    throw new Error('Cargo inválido!');
  }

  // Exibir informações
  funcionario.seApresentar();
  if (gerente) {
    gerente.gerenciar();
  } else if (desenvolvedor) {
    desenvolvedor.programar();
  }
} catch (error) {
  exibirErro(error.message);
}



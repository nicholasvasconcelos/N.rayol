// Objeto que armazena as informações
const pessoa = {
    nome: "",
    idade: "",
    curso: "",

    // Método para atualizar as informações
    atualizarInformacoes: function (nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    },

    // Método para exibir as informações
    exibirInformacoes: function () {
        const nomeElemento = document.getElementById("nome");
        const idadeElemento = document.getElementById("idade");
        const cursoElemento = document.getElementById("curso");

        nomeElemento.textContent = "Nome: " + this.nome;
        idadeElemento.textContent = "Idade: " + this.idade;
        cursoElemento.textContent = "Curso: " + this.curso;
    }
};

// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault();

    const nomeInput = document.getElementById("nomeInput");
    const idadeInput = document.getElementById("idadeInput");
    const cursoInput = document.getElementById("cursoInput");

    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const curso = cursoInput.value;

    pessoa.atualizarInformacoes(nome, idade, curso);
    pessoa.exibirInformacoes();

    nomeInput.value = "";
    idadeInput.value = "";
    cursoInput.value = "";
}

// Adicionar evento de envio do formulário
const formInfo = document.getElementById("formInfo");
formInfo.addEventListener("submit", handleSubmit);

// Exibir informações inicialmente
pessoa.exibirInformacoes();
